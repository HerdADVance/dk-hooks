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

// COMPONENTS
import Exposures from './components/Exposures'
import Positions from './components/Positions'
import Games from './components/Games'
import Players from './components/Players'
import Lineups from './components/Lineups'



const App = () => {

    const numLineups = 20

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
        console.log(result)

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
        <div className="wrapper">

            {showExposures ?
                <div className="exposures">
                    <Exposures
                        filteredPlayers={players}
                    />
                </div>
            :

                <div className="selector">
                    <div className="list">
                        <div className="list-wrap">
                            
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
