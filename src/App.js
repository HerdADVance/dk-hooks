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


// Num lineups
// Prevent QB & D
// Showdown

// PACKAGES
import React, { useState, useEffect } from "react";
import './App.css';
//import axios from 'axios'
import DownloadLink from "react-download-link";

// LODASH
import pull from 'lodash/pull'
import filter from 'lodash/filter'
import orderBy from 'lodash/orderBy'
import concat from 'lodash/concat'
import uniq from 'lodash/uniq'
import cloneDeep from 'lodash/cloneDeep'

// DATA
<<<<<<< HEAD
import PLAYERS from './data/PLAYERS1220'
=======
import PLAYERS from './data/PLAYERS1213'
>>>>>>> f92614c65b069806881a7b9453fb8668fcf69656
import POSITIONS from './data/POSITIONSFB'
import HEADERS from './data/HEADERSFB'
import EXPOSUREOPTIONS from './data/EXPOSUREOPTIONSFB'
import EXPOSUREOPTIONSCLONE from './data/EXPOSUREOPTIONSFBCLONE'

// UTILS
import makeLineups from './util/makeLineupsFB'
<<<<<<< HEAD
import initializePlayersAndGames from './util/initializePlayersAndGamesBB' //using BB for all
=======
import initializePlayersAndGames from './util/initializePlayersAndGamesBB'
>>>>>>> f92614c65b069806881a7b9453fb8668fcf69656
import findLineupsToAdd from './util/findLineupsToAdd'
import findLineupIndex from './util/findLineupIndex'
import findPlayerIndex from './util/findPlayerIndex'
import findPlayerSalary from './util/findPlayerSalary'
import findPlayerTeam from './util/findPlayerTeam'
import findPlayerPositions from './util/findPlayerPositions'
import calculateLineupSalary from './util/calculateLineupSalary'
import findAutoCompleteSlotsToSwitch from './util/findAutoCompleteSlotsToSwitch'
import switchAutoCompleteSlots from './util/switchAutoCompleteSlots'
import placeAutoCompleteSlots from './util/placeAutoCompleteSlotsCFB' // using CFB for NFL
import convertLineupsToOriginalFormat from './util/convertLineupsToOriginalFormat'
import convertPlayersToOriginalFormat from './util/convertPlayersToOriginalFormat'
import addLineupsInToPlayerFromLineups from './util/addLineupsInToPlayerFromLineups'
import findExposureGroupIndex from './util/findExposureGroupIndex'
import optimizeLineupStartTimes from './util/optimizeLineupStartTimesFB'
import markSlotsAsLocked from './util/markSlotsAsLocked'
import processImportData from './util/processImportData'
import processImportLineups from './util/processImportLineups'
import processImportExposures from './util/processImportExposures'
import emptyLineups from './util/emptyLineups'
import emptyLineupsIn from './util/emptyLineupsIn'
import markAllSlotsAsUnselected from './util/markAllSlotsAsUnselected'
import isAnotherSlotSelected from './util/isAnotherSlotSelected'
import placeQBs from './util/placeQBs'

// SEEDERS
import SEEDER from './seeders/CFBSEEDER'

// COMPONENTS
import Init from './components/Init'
import Exposures from './components/Exposures'
import Positions from './components/Positions'
import Games from './components/Games'
import Players from './components/Players'
import Lineups from './components/Lineups'
import ImportProgress from './components/ImportProgress'

const App = () => {

    const [numLineups, setNumLineups] = useState(150)

    const [showInit, setShowInit] = useState(false)
    const [showExposures, setShowExposures] = useState(false)
    const [showImport, setShowImport] = useState(false)
    //const [numLineups, setNumLineups] = useState(0)

    const [clickedPosition, setClickedPosition] = useState('ALL')
    const [clickedTeam, setClickedTeam] = useState('ALL')

    const [positions, setPositions] = useState([])
    const [games, setGames] = useState([])
    const [players, setPlayers] = useState({})
    const [filteredPlayers, setFilteredPlayers] = useState([])
    const [referencePlayers, setReferencePlayers] = useState({})
    const [lineups, setLineups] = useState([])
    const [selectedSlots, setSelectedSlots] = useState([])
    const [saved, setSaved] = useState([])
    const [swapMode, setSwapMode] = useState(false)

    // Init
    useEffect(() => {

        const init = initializePlayersAndGames(PLAYERS)
        
        setPositions(POSITIONS)
        setGames(init.games)
        setPlayers(init.players)
        setFilteredPlayers(init.players)
        setReferencePlayers(init.players)
        setLineups(makeLineups(numLineups))
        //setLineups(makeLineups(numLineups))

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
        
        while(counter < 50000 && l[0].salary > 50000){
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
                //console.log('no indexes')
                continue
            }
        }

        console.log(counter)
        l = concat (l, lineupsRemoved)
        l = orderBy(l, 'salary', ['desc'])

        return l
    }

<<<<<<< HEAD
    function handleStackWRsClick(){

    }

=======
>>>>>>> f92614c65b069806881a7b9453fb8668fcf69656
    function handleFillQBsClick(){

        // Getting players, cloning, filtering non-QB's, order by exposure
        let playersObject = {...players}
        let p = cloneDeep(playersObject)
        p = filter(p, ['position', 'QB'])
        p = orderBy(p, 'exposure', ['desc'])
<<<<<<< HEAD

        console.log(p)
=======
>>>>>>> f92614c65b069806881a7b9453fb8668fcf69656
        
         // Getting lineups and cloning
        let lineupsArray = [...lineups]
        let l = cloneDeep(lineupsArray)

        // Putting QB's in lineups
        l = placeQBs(p,l)

        console.log(l)
        
        // Calculate salary for each lineup
        for(var i = 0; i < l.length; i++){
            l[i].salary = calculateLineupSalary(l[i].roster, playersObject)
        }

        // Convert to original format
        //lineupsArray = convertLineupsToOriginalFormat(lineupsArray, l)
        // = convertPlayersToOriginalFormat(playersObject, p, l)
<<<<<<< HEAD
        lineupsArray = convertLineupsToOriginalFormat(lineupsArray, l, true)
=======
        lineupsArray = convertLineupsToOriginalFormat(lineupsArray, l)
>>>>>>> f92614c65b069806881a7b9453fb8668fcf69656

        // Emptying lineups in for each player
        for(var i = 0; i < p.length; i++){
            let pid = p[i].id
            playersObject[pid].lineupsIn = []
        }

        // Looping through all lineups to add lineupsIn to players
        for (var i = 0; i < l.length; i++){
            let lid = l[i].id
            for(var j = 0; j < l[i].roster.length; j++){
                if(l[i].roster[j].player){
                    let pid = l[i].roster[j].player
                    playersObject[pid].lineupsIn.push(lid)
                }
            }
        }

        
        // Set State
        console.log(lineupsArray)
        setLineups(lineupsArray)
        setPlayers(playersObject)
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

        console.log(l)

        // Calculate salary for each lineup
        for(var i = 0; i < l.length; i++){
            l[i].salary = calculateLineupSalary(l[i].roster, playersObject)
        }

        // Order lineups by salaries
        l = orderBy(l, 'salary', ['desc'])

        // Start Swapping players in lineup to fit under salary
        l = fitSalaries(l, playersObject)

        lineupsArray = convertLineupsToOriginalFormat(lineupsArray, l, false)
        //lineupsArray = orderBy(lineupsArray, 'salary', ['desc'])
        playersObject = convertPlayersToOriginalFormat(playersObject, p, l)
        //playersObject = addLineupsInToPlayerFromLineups(playersObject, l)
        
        setLineups(lineupsArray)
        setPlayers(playersObject)

    }

    function handleEmptyLineupsClick(){
        let l = [...lineups]
        let p = {...players}
        
        l = emptyLineups(l)
        p = emptyLineupsIn(p)

        setLineups(l)
        setPlayers(p)
    }

    function handleExportLineupsClick(){
        let l = [...lineups]
        let p = {...players}
        let output = ''

        //l = optimizeLineupStartTimes(l, p)
        setLineups(l)

        //Header Row
        // for(var i = 0; i < HEADERS.length; i++){
        //     output += HEADERS[i]
        //     if(i != HEADERS.length - 1) output += ','
        //     else output += '\n'
        // }

        output += 'Entry ID,'
        output += 'Contest Name,'
        output += 'Contest ID,'
        output += 'Entry Fee,'
        output += 'QB,'
        output += 'RB,'
        output += 'RB,'
        output += 'WR,'
        output += 'WR,'
        output += 'WR,'
        output += 'FLEX,'
        output += 'S-FLEX'
        output += '\n'
        
        // // Each Lineup

        var id = 2408114542
        for(var i = 0; i < lineups.length; i++){
            output += id
            output += ','
            output += 'CFB $30K Air Raid [$10K to 1st] (Afternoon),'
            output += '98356944,'
            output += '$10,'
            for(var j = 0; j < lineups[i].roster.length; j++){
                output += lineups[i].roster[j].player
                if(j != lineups[i].roster.length - 1) output += ','
                
            }
            output += '\n'
            id ++
        }

        return output
    }

    function handleExposureChange(pid, pct){
        let result = {...players}
        result[pid].exposure = pct
        setPlayers(result)
    }

    function handleImportCancelClick(){
        setShowImport(false)
    }

    function handleImportClick(){
        setShowImport(true)
    }

    function handleImportSubmitClick(csv){
        let l = [...lineups]
        let p = {...players}
        let {lineupsData, exposuresData} = processImportData(csv)
        
        l = processImportLineups(l, lineupsData)
        setLineups(l)

        p = processImportExposures(p, l, exposuresData)
        setPlayers(p)

        setShowImport(false)
    }

    function handleInitClick(num){
        setNumLineups(num)
        setLineups(makeLineups(num))
        setShowInit(false)
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

    function handleSaveClick(){
        let l = lineups
        let p = players

        let output = ''

        let lineupData = []
        for(var i = 0; i < l.length; i++){
            for(var j = 0; j < l[i].roster.length; j++){
                output += l[i].roster[j].player
                output += ','
            }
        }

        output = output.slice(0, -1)
        output += '|'

        let playersSorted = orderBy(p, 'id', ['asc'])
        for(var i = 0; i < playersSorted.length; i++){
            output += playersSorted[i].exposure
            output += ','
        }

        output = output.slice(0, -1)

        return output
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
        let l = [...lineups]
        
        if(swapMode){
            let selectedSlot = isAnotherSlotSelected(l)
            if(selectedSlot){
                if(pid){ 

                    // Players are the same so no reason to swap. Check to see if unselecting old slot or switching to new slot
                    if(pid == selectedSlot.pid){

                        // Same slot so mark as unselected
                        if(lid == selectedSlot.lid){
                            markSlotAsUnselected(lid, sid)
                        } else{ // mark new as selected and old as unselected
                            markSlotAsSelected(lid, sid)
                            markSlotAsUnselected(selectedSlot.lid, selectedSlot.sid)
                        }
                        
                    } else{
                        
                        // Check player on player swap  
                        if(selectedSlot.pid){

                        } else{ // Check player on blank swap  

                        }
                    }
                } else{ 

                    // Check player on blank swap
                    if(selectedSlot.pid){

                    } else{ // Check player on player swap  

                    }
                }

            } else{
                markSlotAsSelected(lid, sid)
            }
        
        } else{ // Add/Delete mode
            if(pid){ // Remove player
                removePlayerFromLineup(lid, sid, pid)
                removeLineupInFromPlayer(pid, lid)
            } else{

                if(selected){ // Mark unselected
                    markSlotAsUnselected(lid, sid)
                } else{ // Mark selected and mark other slots in same lineup unselected
                    markOtherSlotsAsUnselected(lid)
                    markSlotAsSelected(lid, sid)
                }
            }
        }
    }

    function handleSortPlayersClick(category){
        console.log(category)
    }

    function handleSwapModeClick(){
        let l = [...lineups]
        l = markAllSlotsAsUnselected(l)
        setLineups(l)
        setSwapMode(!swapMode)
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
        <div className="FB">
            {showInit ? 
                <Init
                    handleInitClick={handleInitClick}
                /> 
            : ''}

            <div className="top">

                <button onClick={handleSwitchViewClick}>Switch View</button>
                <button onClick={handleFillQBsClick}>Fill QB's</button>
<<<<<<< HEAD
                <button onClick={handleStackWRsClick}>Stack WR's</button>
=======
>>>>>>> f92614c65b069806881a7b9453fb8668fcf69656
                <button onClick={handleCompleteLineupsClick}>Complete Lineups</button>
                {/*<button onClick={handleEmptyLineupsClick}>Empty Lineups</button*/}
                <button onClick={handleImportClick}>Import Progress</button>
                <DownloadLink 
                    label="Save Lineups & Exposures"
                    filename="dk-saved-progress.csv"
                    tagName="button"
                    exportFile={() => Promise.resolve(handleSaveClick())}
                />
                <DownloadLink
                    label="Export Lineups"
                    filename="dk-lineups.csv"
                    tagName="button"
                    exportFile={() => Promise.resolve(handleExportLineupsClick())}
                />
                <button
                    onClick={handleSwapModeClick}
                >
                    {swapMode ? 'Swap Mode' : 'Add/Delete Mode'}
                </button>
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
                                players={players}
                                lineups={lineups}
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

            {showImport ? 
                <ImportProgress
                    handleImportSubmitClick={handleImportSubmitClick}
                    handleImportCancelClick={handleImportCancelClick}
                /> 
            : ''}

        </div>
    );
}

export default App;
