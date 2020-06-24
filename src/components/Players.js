import React, { useState } from "react";

import Player from './Player'
import ClickedPlayer from './ClickedPlayer'

const Players = ({ filteredPlayers, numLineups, handlePlayerActionClick, selectedSlots }) => {

    const [clickedPlayer, setClickedPlayer] = useState(null)
    const [randomValue, setRandomValue] = useState(false)

    function handlePlayerClick(id) {
        setClickedPlayer(id)
    }

    function onRandomChange(val) {
        val.target.value === 'random' ? setRandomValue('random') : setRandomValue('ordered')
    }

    return(

        <div className="players-wrap">
                                    
            <table className="players clickable">
            <thead><tr>
                <th>Pos</th>
                <th>Player</th>
                <th>Team</th>
                <th>Salary</th>
                <th>Lineups</th>
                <th>PPG</th>
                <th>Game</th>
            </tr></thead><tbody>
                {
                filteredPlayers?
                    Object.keys(filteredPlayers).map((player, index) => (

                        <>
                       
                        <Player 
                            player={filteredPlayers[player]}
                            numLineups={numLineups}
                            handlePlayerClick={handlePlayerClick}
                        />

                        {
                        player === clickedPlayer?
                            
                            <ClickedPlayer
                                player={filteredPlayers[player]}
                                numLineups={numLineups}
                                random={randomValue}
                                handlePlayerActionClick={handlePlayerActionClick}
                                onRandomChange={onRandomChange}
                                selectedSlots={selectedSlots}
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