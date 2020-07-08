import React, { useState } from "react";

import Player from './Player'
import ClickedPlayer from './ClickedPlayer'

const Players = ({ filteredPlayers, numLineups, selectedSlots, handlePlayerActionClick, handlePlayerAddToSelectedClick }) => {

    const [clickedPlayer, setClickedPlayer] = useState(null)
    const [randomValue, setRandomValue] = useState(false)

    function handlePlayerClick(id) {
        console.log(id)
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
                <th>Currently In</th>
                <th>Target</th>
                <th>PPG</th>
                <th>Game</th>
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