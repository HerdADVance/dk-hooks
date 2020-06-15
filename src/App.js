import React, { useState, useEffect } from "react";
import './App.css';
//import axios from 'axios'
import findIndex from 'lodash/findIndex'

// DATA
import POSITIONS from './data/POSITIONS'
import PLAYERS from './data/PLAYERS'

// UTILS
import makeLineups from './util/makeLineups'
import initializePlayersAndGames from './util/initializePlayersAndGames'
import addToLineups from './util/addToLineups'

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
    const [lineups, setLineups] = useState([])

    
    useEffect(() => {

        const init = initializePlayersAndGames(PLAYERS)
        
        setPositions(POSITIONS)
        setGames(init.games)
        setPlayers(init.players)
        setFilteredPlayers(init.players)
        setLineups(makeLineups(numLineups))

    }, [])

    // useEffect(() => {
        
    //     lineups.forEach(function(lineup){
    //         lineup.roster.forEach(function(slot){
    //             if(slot.player){
    //                 players[slot.player].lineupsIn.push({
    //                     lineup: lineup.id,
    //                     slot: slot.id
    //                 })
    //             }
    //         })
    //     })

    // }, [lineups])



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


    function addPlayerToLineups(pid, toAdd){

        let result = [...lineups]

        console.log(result)
        
        toAdd.forEach(function(lid){
            let lineupIndex = findIndex(result, function(o) { return o.id == lid })
            result[lineupIndex].roster[0].player = pid
        })

        setLineups(result)
    }

    function handlePlayerActionClick(id, positions, random, delta) {
        const toAdd = addToLineups(id, positions, random, delta, lineups)
        addPlayerToLineups(id, toAdd)
    }

    function handlePositionClick(position){
        setClickedPosition(position)
    }

    function handleSlotClick(lid, sid){
        //setLineups
    }

    function handleTeamClick(team){
        setClickedTeam(team)   
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
                    handleSlotClick={handleSlotClick}
                />

            </div>
        </div>
    );
}

export default App;
