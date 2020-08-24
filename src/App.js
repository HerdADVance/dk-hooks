// Fill in all auto complete slots before sorting salaries
// Fix weird number thingy
// Make sure options like defender in util only taken away for basketball
// Account for exposure percentages not being whole numbers
// Fix games display
// Remove from X lineups button
// Account for locked slots before auto complete
// Sort final lineups by time before converting to spreadsheet
// Convert to spreadsheet

// Correlations
// Limit number of players on team in one lineup
// Target stacks

import React, { useState, useEffect } from "react";
import './App.css';
//import axios from 'axios'
import pull from 'lodash/pull'
import orderBy from 'lodash/orderBy'
import concat from 'lodash/concat'
import uniq from 'lodash/uniq'
import cloneDeep from 'lodash/cloneDeep'

// DATA
import PLAYERS from './data/PLAYERSBB824'
import POSITIONS from './data/POSITIONSBB'
import EXPOSUREOPTIONS from './data/EXPOSUREOPTIONSBB'
import EXPOSUREOPTIONSBBCLONE from './data/EXPOSUREOPTIONSBBCLONE'

// UTILS
import makeLineups from './util/makeLineupsBB'
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
import placeAutoCompleteSlots from './util/placeAutoCompleteSlots'
import convertLineupsToOriginalFormat from './util/convertLineupsToOriginalFormat'
import convertPlayersToOriginalFormat from './util/convertPlayersToOriginalFormat'
import addLineupsInToPlayerFromLineups from './util/addLineupsInToPlayerFromLineups'
import findExposureGroupIndex from './util/findExposureGroupIndex'

// SEEDERS
import SOCCERSEEDER from './seeders/SOCCERSEEDER'
import BBSEEDER from './seeders/BBSEEDER'

// COMPONENTS
import Exposures from './components/Exposures'
import Positions from './components/Positions'
import Games from './components/Games'
import Players from './components/Players'
import Lineups from './components/Lineups'


const App = () => {

    const numLineups = 80

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
        
        while(counter < 5000 && l[0].salary > 50000){
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
                
            } else break
        }

        console.log(counter)
        l = concat (l, lineupsRemoved)
        l = orderBy(l, 'salary', ['desc'])

        return l
    }

    async function handleCompleteLineupsClick(){

        // Getting players, cloning, sorting by lineupsIn, converting to array
        let playersObject = {...players}
        let p = cloneDeep(playersObject)
        p = orderBy(p, 'lineupsIn', ['desc'])
        
        // Getting lineups, cloning
        let lineupsArray = [...lineups]
        let l = cloneDeep(lineupsArray)

        // Getting Exposure Groups (not synced to actual - just to use to count totals bewlow)
        let e = EXPOSUREOPTIONSBBCLONE.groups


        p.forEach(function(player){
            // Figure out how many lineups players need to be in
            player.lineupsNeeded = Math.round( (player.exposure/100 * numLineups) - player.lineupsIn.length)
            
            // Count the totals for the exposure groups
            player.actualPositions.forEach(function(actualPosition){
                let index = findExposureGroupIndex(actualPosition, e)
                e[index].exposureTotal += (player.exposure/player.actualPositions.length)
            })
        })


        // Sort players by least position flexible and most lineups needed to be in
        //p = orderBy(p, ['positions.length', 'lineupsNeeded'], ['asc', 'desc'])

        // Will attempt to exactly place players in num lineups that matches their exposure. 
        // 3rd arg is number of tries to get perfect before moving on
        let placed = placeAutoCompleteSlots(p, l, e, 20)
        p = placed.p
        l = placed.l

        // Calculate salary for each lineup
        for(var i = 0; i < l.length; i++){
            l[i].salary = calculateLineupSalary(l[i].roster, playersObject)
        }

        // Order lineups by salaries
        l = orderBy(l, 'salary', ['desc'])

        //console.log(p)
        //console.log(l)

        // for(var i = 0; i < l.length; i++){
        //     let arr = []
        //     for(var j= 0; j < l[i].roster.length; j++){
        //         arr.push(l[i].roster[j].player)
        //     }
        //     console.log(uniq(arr))
        // }


        // Start Swapping players in lineup to fit under salary
        l = fitSalaries(l, playersObject)
        
        // console.log(swappedLineups)
        // let salary = 0
        // for(var i=0; i < swappedLineups['l'].length; i++){
        //     salary += swappedLineups['l'][i].salary
        // }
        // for(var i=0; i < swappedLineups['lineupsRemoved'].length; i++){
        //     salary += swappedLineups['lineupsRemoved'][i].salary
        // }
        // console.log(salary)
        // Time to reorder ideas
        // 1. Lottery type weighted randomness to take expensive player from expensive lineup but not always most expensive
        // 2. Add locked spots as part of initial lineups to make sure user's selections stay put


        // for(var i = 0; i < l.length; i++){
        //     let arr = []
        //     for(var j= 0; j < l[i].roster.length; j++){
        //         arr.push(l[i].roster[j].player.pid)
        //     }
        //     console.log(uniq(arr))
        // }

        // Also convert players
        lineupsArray = convertLineupsToOriginalFormat(lineupsArray, l)
        lineupsArray = orderBy(lineupsArray, 'salary', ['desc'])
        playersObject = convertPlayersToOriginalFormat(playersObject, p)
        playersObject = addLineupsInToPlayerFromLineups(playersObject, l)
        
        setLineups(lineupsArray)
        setPlayers(playersObject)

    }

    function handleExportLineupsClick(){
        let l = [...lineups]
        let output = 'PG,SG,SF,PF,C,G,F,UTIL\n'
        for(var i = 0; i < lineups.length; i++){
            for(var j = 0; j < lineups[i].roster.length; j++){
                output += lineups[i].roster[j].player
                if(j != lineups[i].roster.length - 1) output += ','
            }
            output += '\n'
        }
        console.log(output)
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

        const seeder = BBSEEDER

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
                <button onClick={handleExportLineupsClick}>Export Lineups</button>
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
