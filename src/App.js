import React, { useState, useEffect } from "react";
import './App.css';
//import axios from 'axios'
import remove from 'lodash/remove'

// DATA
import POSITIONS from './data/POSITIONS'
import PLAYERS from './data/PLAYERS'

// UTILS
import makeLineups from './util/makeLineups'
import initializePlayersAndGames from './util/initializePlayersAndGames'
import findLineupsToAdd from './util/findLineupsToAdd'
import findLineupIndex from './util/findLineupIndex'

// COMPONENTS
import Positions from './components/Positions'
import Games from './components/Games'
import Players from './components/Players'
import Lineups from './components/Lineups'



const App = () => {

    const numLineups = 20

    const [clickedPosition, setClickedPosition] = useState('ALL')
    const [clickedTeam, setClickedTeam] = useState('ALL')

    const [positions, setPositions] = useState([])
    const [games, setGames] = useState([])
    const [players, setPlayers] = useState({})
    const [filteredPlayers, setFilteredPlayers] = useState({})
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
                        sid: slot.id
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
            result[pid].lineupsIn.push(slot)
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

    function handlePlayerActionClick(id, positions, random, delta) {
        const toAdd = findLineupsToAdd(id, positions, random, delta, lineups, players[id].lineupsIn)
        addPlayerToLineups(id, toAdd)
        addLineupsInToPlayer(id, toAdd)
    }

    function handlePositionClick(position){
        setClickedPosition(position)
    }

    function handleSlotClick(lid, sid, pid){
        if(pid){
            removePlayerFromLineup(lid, sid, pid)
            removeLineupInFromPlayer(pid, lid)
        }
        else{
            markSlotAsSelected(lid, sid)
        }
    }

    function handleTeamClick(team){
        setClickedTeam(team)   
    }

    function markSlotAsSelected(lid, sid){
        let result = [...lineups]
        const lineupIndex = findLineupIndex(result, lid)
        result[lineupIndex].roster[sid].selected = ! result[lineupIndex].roster[sid].selected
        setLineups(result)
    }

    function removeLineupInFromPlayer(pid, lid){
        let result = {...players}
        let lineupsIn = result[pid].lineupsIn
        remove(lineupsIn, {lid: lid})
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
                        handlePlayerActionClick={handlePlayerActionClick}
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
    );
}

export default App;
