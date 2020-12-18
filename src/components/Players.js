import React, { useState } from "react";

import Player from './Player'
import ClickedPlayer from './ClickedPlayer'

import filter from 'lodash/filter'

const Players = ({
    players,
    lineups, 
    filteredPlayers, 
    numLineups, 
    selectedSlots, 
    handlePlayerActionClick, 
    handlePlayerAddToSelectedClick,
    handleSortPlayersClick
}) => {

    const [randomValue, setRandomValue] = useState(false)
    const [clickedPlayer, setClickedPlayer] = useState(null)
    const [stackable, setStackable] = useState(null)

    function handlePlayerClick(id) {
        setClickedPlayer(id)

        let teammates = []
        let opponents = []

        // Filter to team
        let ts = filter(players, ['team', players[id].team])
        let os = filter(players, ['team', players[id].opponent])
        
        // Filter to those in lineups
        ts.forEach(function(t){
            if(t.lineupsIn.length > 0) teammates.push(t)
        })
        os.forEach(function(o){
            if(o.lineupsIn.length > 0) opponents.push(o)
        })

        let stackable = {}
        stackable.teammates = teammates
        stackable.teammates.qbs = filter(teammates, ['position', 'QB']) 
        stackable.teammates.rbs = filter(teammates, ['position', 'RB'])
        stackable.teammates.wrs = filter(teammates, ['position', 'WR']) 
        stackable.teammates.tes = filter(teammates, ['position', 'TE']) 
        stackable.opponents = opponents
        stackable.opponents.qbs = filter(opponents, ['position', 'QB']) 
        stackable.opponents.rbs = filter(opponents, ['position', 'RB'])
        stackable.opponents.wrs = filter(opponents, ['position', 'WR']) 
        stackable.opponents.tes = filter(opponents, ['position', 'TE'])

        setStackable(stackable)
    }

    function onRandomChange(val) {
        val.target.value === 'random' ? setRandomValue('random') : setRandomValue('ordered')
    }

    return(

        <div className="players-wrap">
                                    
            <table className="players clickable">
            <thead><tr>
                <th onClick={() => handleSortPlayersClick('position')}>Pos</th>
                <th onClick={() => handleSortPlayersClick('player')}>Player</th>
                <th onClick={() => handleSortPlayersClick('team')}>Team</th>
                <th onClick={() => handleSortPlayersClick('salary')}>Salary</th>
                <th onClick={() => handleSortPlayersClick('lineupsIn')}>Currently In</th>
                <th onClick={() => handleSortPlayersClick('exposure')}>Target</th>
            </tr></thead><tbody>
                {
                filteredPlayers?
                    filteredPlayers.map((player, index) => (

                        <>
                       
                        <Player
                            player={player}
                            numLineups={numLineups}
                            handlePlayerClick={handlePlayerClick}
                        />

                        {
                        player.id === clickedPlayer?
                            
                            <ClickedPlayer
                                stackable={stackable}
                                player={player}
                                numLineups={numLineups}
                                random={randomValue}
                                onRandomChange={onRandomChange}
                                selectedSlots={selectedSlots}
                                handlePlayerActionClick={handlePlayerActionClick}
                                handlePlayerAddToSelectedClick={handlePlayerAddToSelectedClick}
                            />
                        :
                            ''
                        }

                        

                        </>
                    ))
                :
                    <p>Loading players</p>
                }
            </tbody></table>

        </div>
    )
}

export default Players