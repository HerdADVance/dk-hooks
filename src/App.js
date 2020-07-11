import React, { useState, useEffect } from "react";
import './App.css';
//import axios from 'axios'
import pull from 'lodash/pull'
import orderBy from 'lodash/orderBy'

// DATA
import POSITIONS from './data/POSITIONS'
import PLAYERS from './data/PLAYERS'

// UTILS
import makeLineups from './util/makeLineups'
import initializePlayersAndGames from './util/initializePlayersAndGames'
import findLineupsToAdd from './util/findLineupsToAdd'
import findLineupIndex from './util/findLineupIndex'
import findPlayerIndex from './util/findPlayerIndex'

// COMPONENTS
import Exposures from './components/Exposures'
import Positions from './components/Positions'
import Games from './components/Games'
import Players from './components/Players'
import Lineups from './components/Lineups'


const App = () => {

    const numLineups = 40

    const [showExposures, setShowExposures] = useState(true)

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

    function handleCompleteLineupsClick(){

        let result = {...players}

        let p = orderBy(result, 'lineupsIn', ['desc'])
        let l = [...lineups]

        p.forEach(function(player){
            player.lineupsNeeded = Math.round( (player.exposure/100 * numLineups) - player.lineupsIn.length)
        })

        p = orderBy(p, 'lineupsNeeded', ['desc'])

        for(var i = 0; i < p.length; i++){
            if(p[i].lineupsNeeded > 0){
                const toAdd = findLineupsToAdd(p[i].id, p[i].positions, 'random', p[i].lineupsNeeded, l, p[i].lineupsIn)
                console.log(toAdd)
                l = addPlayerToTempLineups(p[i].id, toAdd, l)
                //addLineupsInToPlayer(p[i].id, toAdd)
            } else break
        }

        setLineups(l)

        //console.log(l)

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

        const seeder = [
            {pid: 14718324, pct: 25}, // GK
            {pid: 14718333, pct: 20},
            {pid: 14718370, pct: 30},
            {pid: 14718459, pct: 15},
            {pid: 14718377, pct: 10},
            {pid: 14718274, pct: 20}, // D
            {pid: 14718358, pct: 35},
            {pid: 14718364, pct: 25},
            {pid: 14718381, pct: 20},
            {pid: 14718388, pct: 15},
            {pid: 14718397, pct: 30},
            {pid: 14718421, pct: 15},
            {pid: 14718448, pct: 20},
            {pid: 14718476, pct: 5},
            {pid: 14718527, pct: 15},
            {pid: 14718255, pct: 15}, // M
            {pid: 14718257, pct: 20},
            {pid: 14718260, pct: 10},
            {pid: 14718263, pct: 10},
            {pid: 14718266, pct: 15},
            {pid: 14718271, pct: 10},
            {pid: 14718276, pct: 15},
            {pid: 14718280, pct: 20},
            {pid: 14718283, pct: 25},
            {pid: 14718285, pct: 5},
            {pid: 14718288, pct: 5},
            {pid: 14718293, pct: 5},
            {pid: 14718298, pct: 15},
            {pid: 14718300, pct: 30},
            {pid: 14718305, pct: 35},
            {pid: 14718307, pct: 10},
            {pid: 14718310, pct: 5},
            {pid: 14718312, pct: 15},
            {pid: 14718315, pct: 20},
            {pid: 14718317, pct: 10},
            {pid: 14718325, pct: 10},
            {pid: 14718327, pct: 25},
            {pid: 14718339, pct: 15},
            {pid: 14718269, pct: 15},     // F
            {pid: 14718278, pct: 10},
            {pid: 14718303, pct: 25},
            {pid: 14718322, pct: 25},
            {pid: 14718341, pct: 10},
            {pid: 14718351, pct: 25},
            {pid: 14718356, pct: 15},
            {pid: 14718385, pct: 10},
            {pid: 14718407, pct: 10},
            {pid: 14718454, pct: 10}
        ]

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
