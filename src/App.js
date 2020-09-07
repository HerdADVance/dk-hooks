// Fill in all auto complete slots before sorting salaries
// Make sure options like defender in util only taken away for basketball
// Account for exposure percentages not being whole numbers
// Fix games display
// Remove from X lineups button
// Account for locked slots before auto complete
// Sort Players table by any column (need to convert players to array to do this)
// Sort final lineups by time before converting to spreadsheet
// Extract dates at initialization for non-BB sports
// Account for AM dates

// Correlations
// Limit number of players on team in one lineup
// Target stacks

// PACKAGES
import React, { useState, useEffect } from "react";
import './App.css';
//import axios from 'axios'
import DownloadLink from "react-download-link";

// LODASH
import pull from 'lodash/pull'
import orderBy from 'lodash/orderBy'
import concat from 'lodash/concat'
import uniq from 'lodash/uniq'
import cloneDeep from 'lodash/cloneDeep'

// DATA
import PLAYERS from './data/PLAYERSCFB'
import POSITIONS from './data/POSITIONSCFB'
import HEADERS from './data/HEADERSCFB'
import EXPOSUREOPTIONS from './data/EXPOSUREOPTIONSCFB'
import EXPOSUREOPTIONSCLONE from './data/EXPOSUREOPTIONSCFBCLONE'

// UTILS
import makeLineups from './util/makeLineupsCFB'
import initializePlayersAndGames from './util/initializePlayersAndGamesBB'
import findLineupsToAdd from './util/findLineupsToAdd'
import findLineupIndex from './util/findLineupIndex'
import findPlayerIndex from './util/findPlayerIndex'
import findPlayerSalary from './util/findPlayerSalary'
import findPlayerTeam from './util/findPlayerTeam'
import findPlayerPositions from './util/findPlayerPositions'
import calculateLineupSalary from './util/calculateLineupSalary'
import findAutoCompleteSlotsToSwitch from './util/findAutoCompleteSlotsToSwitch'
import switchAutoCompleteSlots from './util/switchAutoCompleteSlots'
import placeAutoCompleteSlots from './util/placeAutoCompleteSlotsCFB'
import convertLineupsToOriginalFormat from './util/convertLineupsToOriginalFormat'
import convertPlayersToOriginalFormat from './util/convertPlayersToOriginalFormat'
import addLineupsInToPlayerFromLineups from './util/addLineupsInToPlayerFromLineups'
import findExposureGroupIndex from './util/findExposureGroupIndex'
import optimizeLineupStartTimes from './util/optimizeLineupStartTimesFB'
import markSlotsAsLocked from './util/markSlotsAsLocked'

// SEEDERS
import SEEDER from './seeders/CFBSEEDER'

// COMPONENTS
import Exposures from './components/Exposures'
import Positions from './components/Positions'
import Games from './components/Games'
import Players from './components/Players'
import Lineups from './components/Lineups'


const App = () => {

    const numLineups = 40

    const [showExposures, setShowExposures] = useState(false)

    const [clickedPosition, setClickedPosition] = useState('ALL')
    const [clickedTeam, setClickedTeam] = useState('ALL')

    const [positions, setPositions] = useState([])
    const [games, setGames] = useState([])
    const [players, setPlayers] = useState({})
    const [filteredPlayers, setFilteredPlayers] = useState([])
    const [referencePlayers, setReferencePlayers] = useState({})
    const [lineups, setLineups] = useState([])
    const [selectedSlots, setSelectedSlots] = useState([])

    // Init
    useEffect(() => {

        const init = initializePlayersAndGames(PLAYERS)
        
        setPositions(POSITIONS)
        setGames(init.games)
        setPlayers(init.players)
        setFilteredPlayers(init.players)
        setReferencePlayers(init.players)
        setLineups(makeLineups(numLineups))

    }, [])

    // Filter Players
    useEffect(() => {

        let result = {...players}
        
        if(clickedPosition !== 'ALL'){
            result = Object.keys(result).reduce(function(r, e) {
                if (result[e].positions.includes(clickedPosition)) r[e] = result[e]
                return r;
            }, {})
        }

        if(clickedTeam !== 'ALL'){
            result = Object.keys(result).reduce(function(r, e) {
                if (result[e].team === clickedTeam) r[e] = result[e]
                return r;
            }, {})
        }

        result = orderBy(result, 'salary', ['desc'])

        setFilteredPlayers(result)

    }, [clickedPosition, clickedTeam, players])

    // Slots
    useEffect(() => {
        let foundLineups = [...lineups]
        let result = []

        foundLineups.forEach(function(lineup){
            lineup.roster.forEach(function(slot){
                if(slot.selected){
                    result.push({
                        lid: lineup.id,
                        sid: slot.id,
                        position: slot.position
                    })
                }
            }) 
        })

        setSelectedSlots(result)

    }, [lineups])


    // FUNCTIONS

    function addLineupsInToPlayer(pid, toAdd){
        let result = {...players}
        toAdd.forEach(function(slot){
            result[pid].lineupsIn.push(slot.lid)
        })
        setPlayers(result)

    }

    function addTempLineupsInToPlayer(pid, toAdd){
        let result = {...players}
        toAdd.forEach(function(slot){
            result[pid].lineupsIn.push(slot.lid)
        })
        setPlayers(result)

    }

    function addPlayerToLineups(pid, toAdd){
        let result = [...lineups]
        toAdd.forEach(function(slot){
            const lineupIndex = findLineupIndex(result, slot.lid)
            result[lineupIndex].roster[slot.sid].player = pid
        })
        setLineups(result)
    }

    function addPlayerToTempLineups(pid, toAdd, lineups){
        toAdd.forEach(function(slot){
            const lineupIndex = findLineupIndex(lineups, slot.lid)
            lineups[lineupIndex].roster[slot.sid].player = pid
        })
        return lineups
    }

    function fitSalaries(l, p){

        // Adding info for each player and sorting roster for each by salary descending
        l.forEach(function(lineup){
            lineup.roster.forEach(function(slot){
                const pid = slot.player
                const salary = findPlayerSalary(p, slot.player)
                const team = findPlayerTeam(p, slot.player)
                const positions = findPlayerPositions(p, slot.player)

                slot.player = {pid, salary, team, positions}
            })

            lineup.roster = orderBy(lineup.roster, 'player.salary', ['desc'])
        })

        let counter = 0
        let lineupsRemoved = []
        
        while(counter < 100000 && l[0].salary > 50000){
            counter ++
            let indexes = findAutoCompleteSlotsToSwitch(l)
            if(indexes){
                let instance = switchAutoCompleteSlots(l, indexes)
                for(var i=0; i < instance.lineupsRemoved.length; i++){
                    lineupsRemoved.push(instance.lineupsRemoved[i])
                    //console.log(instance.lineupsRemoved[i])
                }
                l = instance.lineups
                l = orderBy(l, 'salary', ['desc'])
                
            } else{
                console.log('no indexes')
                break
            }
        }

        console.log(counter)
        l = concat (l, lineupsRemoved)
        l = orderBy(l, 'salary', ['desc'])

        return l
    }

    function handleCompleteLineupsClick(){

        // Getting players, cloning, sorting by lineupsIn, converting to array
        let playersObject = {...players}
        let p = cloneDeep(playersObject)
        p = orderBy(p, 'lineupsIn', ['desc'])
        
        // Getting lineups, marking as locked, cloning
        let lineupsArray = [...lineups]
        lineupsArray = markSlotsAsLocked(lineupsArray)
        let l = cloneDeep(lineupsArray)

        // Getting Exposure Groups (not synced to actual - just to use to count totals bewlow)
        let e = EXPOSUREOPTIONSCLONE.groups

        // Calculate lineups needed for each player and exposure totals
        p.forEach(function(player){
            // Figure out how many lineups players need to be in
            player.lineupsNeeded = Math.round( (player.exposure/100 * numLineups) - player.lineupsIn.length)
            
            // Count the totals for the exposure groups
            player.actualPositions.forEach(function(actualPosition){
                let index = findExposureGroupIndex(actualPosition, e)
                e[index].exposureTotal += (player.exposure/player.actualPositions.length)
            })
        })

        // Sort players by most lineups needed to be in.
        p = orderBy(p, ['lineupsIn.length', 'lineupsNeeded'], ['desc', 'desc'])

        // Will attempt to exactly place players in num lineups that matches their exposure. 
        l = placeAutoCompleteSlots(p, l, e)

        // Calculate salary for each lineup
        for(var i = 0; i < l.length; i++){
            l[i].salary = calculateLineupSalary(l[i].roster, playersObject)
        }

        // Order lineups by salaries
        l = orderBy(l, 'salary', ['desc'])

        // Start Swapping players in lineup to fit under salary
        l = fitSalaries(l, playersObject)

        lineupsArray = convertLineupsToOriginalFormat(lineupsArray, l)
        //lineupsArray = orderBy(lineupsArray, 'salary', ['desc'])
        playersObject = convertPlayersToOriginalFormat(playersObject, p, l)
        //playersObject = addLineupsInToPlayerFromLineups(playersObject, l)
        
        setLineups(lineupsArray)
        setPlayers(playersObject)

    }

    function handleExportLineupsClick(){
        let l = [...lineups]
        let output = ''

        //l = optimizeLineupStartTimes(l)

        // Header Row
        for(var i = 0; i < HEADERS.length; i++){
            output += HEADERS[i]
            if(i != HEADERS.length - 1) output += ','
            else output += '\n'
        }
        
        // Each Lineup
        for(var i = 0; i < lineups.length; i++){
            for(var j = 0; j < lineups[i].roster.length; j++){
                output += lineups[i].roster[j].player
                if(j != lineups[i].roster.length - 1) output += ','
            }
            output += '\n'
        }

        return output
    }

    function handleExportLineupsClickTest(){
        let l = [...lineups]
        let p = {...players}
        l = optimizeLineupStartTimes(l, p)
    }

    function handleExposureChange(pid, pct){
        let result = {...players}
        result[pid].exposure = pct
        setPlayers(result)
    }

    function handlePlayerActionClick(pid, positions, random, delta) {
        const toAdd = findLineupsToAdd(pid, positions, random, delta, lineups, players[pid].lineupsIn)
        addPlayerToLineups(pid, toAdd)
        addLineupsInToPlayer(pid, toAdd)
    }

    function handlePlayerAddToSelectedClick(pid, positions, slots){
        // Maybe validate slots for position and player just to be sure
        addPlayerToLineups(pid, slots)
        addLineupsInToPlayer(pid, slots)
        selectedSlots.forEach(function(slot){
            markSlotAsUnselected(slot.lid, slot.sid)
        })
    }

    function handlePositionClick(position){
        setClickedPosition(position)
    }

    function handleSeedExposuresClick(){
        let result = {...players}

        const seeder = SEEDER

        for(var i = 0; i < seeder.length; i++){
            const pid = seeder[i].pid
            result[pid].exposure = seeder[i].pct
        }

        setPlayers(result)
    }

    function handleSlotClick(lid, sid, pid, selected){
        if(pid){
            removePlayerFromLineup(lid, sid, pid)
            removeLineupInFromPlayer(pid, lid)
        }
        else{
            if(selected){
                markSlotAsUnselected(lid, sid)
            } else{
                markOtherSlotsAsUnselected(lid)
                markSlotAsSelected(lid, sid)
            }
        }
    }

    function handleSortPlayersClick(category){
        console.log(category)
    }

    function handleSwitchViewClick(){
        setShowExposures(!showExposures)
    }

    function handleTeamClick(team){
        setClickedTeam(team)   
    }

    function markOtherSlotsAsUnselected(lid){
        let result = [...lineups]
        const lineupIndex = findLineupIndex(result, lid)
        let roster = result[lineupIndex].roster
        roster.forEach(function(slot){
            slot.selected = false
        })
        result[lineupIndex] = roster
        setLineups(result)
    }

    function markSlotAsSelected(lid, sid){
        let result = [...lineups]
        const lineupIndex = findLineupIndex(result, lid)
        result[lineupIndex].roster[sid].selected = true
        setLineups(result)
    }

    function markSlotAsUnselected(lid, sid){
        let result = [...lineups]
        const lineupIndex = findLineupIndex(result, lid)
        result[lineupIndex].roster[sid].selected = false
        setLineups(result)
    }

    function removeLineupInFromPlayer(pid, lid){
        let result = {...players}
        let lineupsIn = result[pid].lineupsIn
        pull(lineupsIn, lid)
        result[pid].lineupsIn = lineupsIn
        setPlayers(result)
    }

    function removePlayerFromLineup(lid, sid){
        let result = [...lineups]
        const lineupIndex = findLineupIndex(result, lid)
        result[lineupIndex].roster[sid].player = null
        setLineups(result)
    }

    return (
        <div>
            <div className="top">
                <button onClick={handleSwitchViewClick}>Switch View</button>
                <button onClick={handleSeedExposuresClick}>Seed Exposures</button>
                <button onClick={handleCompleteLineupsClick}>Complete Lineups</button>
                <button onClick={handleExportLineupsClickTest}>Export Test</button>
                <DownloadLink
                    label="Export Lineups"
                    filename="dk-lineups.csv"
                    tagName="button"
                    exportFile={() => Promise.resolve(handleExportLineupsClick())}
                />
            </div>

            {showExposures ?
                <div className="exposures">
                    <Exposures
                        handleExposureChange={handleExposureChange}
                        players={players}
                        numLineups={numLineups}
                    />
                </div>
            :

                <div className="wrapper">
                    <div className="list">
                        <div className="list-wrap">
                            <div className="sticky">
                                <Positions 
                                    positions={positions} 
                                    handlePositionClick={handlePositionClick}
                                    clickedPosition={clickedPosition}
                                />
                                
                                <Games 
                                    games={games}
                                    handleTeamClick={handleTeamClick}
                                    clickedTeam={clickedTeam}
                                />
                            </div>
                            <Players
                                filteredPlayers={filteredPlayers}
                                numLineups={numLineups}
                                selectedSlots={selectedSlots}
                                handlePlayerActionClick={handlePlayerActionClick}
                                handlePlayerAddToSelectedClick={handlePlayerAddToSelectedClick}
                                handleSortPlayersClick={handleSortPlayersClick}
                            />

                        </div>
                    </div>
                    <div className="lineups">
                        
                        <Lineups 
                            lineups={lineups}
                            referencePlayers={referencePlayers}
                            handleSlotClick={handleSlotClick}
                        />

                    </div>
                </div>
            }

        </div>
    );
}

export default App;
