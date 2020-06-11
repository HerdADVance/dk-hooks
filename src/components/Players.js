import React, { useState } from "react";
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

const Players = ({ players, filteredPlayers, numLineups, lineups }) => {

    const [clickedPlayer, setClickedPlayer] = useState(null)
    const [sliderValue, setSliderValue] = useState(0)
    const [sliderDelta, setSliderDelta] = useState(0)

    function handlePlayerActionClick() {

    }

    function handlePlayerClick(id) {
        setClickedPlayer(id)
    }

    function onAfterSliderChange() {

    }

    function onRandomChange() {

    }

    function onSliderChange(value) {
        setSliderValue(value)
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
                       
                        <tr className="player" onClick={() => handlePlayerClick(player)} >
                            <td className="position">{players[player].position}</td>
                            <td className="name">{players[player].name}</td>
                            <td className={`team ${players[player].team}`}>{players[player].team}</td>
                            <td className="salary">${players[player].salary}</td>
                            <td className="apps">0 ({Math.round(0 / numLineups * 100)}%)</td>
                            <td className="ppg">{players[player].ppg}</td>
                            <td className="gameinfo">{players[player].gameInfo}</td>
                         
                        </tr>

                        {
                        player === clickedPlayer?
                            <tr className="player-action">
                                <td colSpan="7">
                                    <p>{players[player].name} is currently in {} of {numLineups} lineups</p>
                                    
                                    <Slider 
                                        value={sliderValue}
                                        min={0}
                                        max={numLineups}
                                        onChange={onSliderChange} 
                                        onAfterChange={onAfterSliderChange}
                                    />
                                    <button
                                        className={"player-add-button " + (sliderDelta >= 0 ? 'positive' : 'negative') }
                                        onClick={() => handlePlayerActionClick(player, sliderDelta) }
                                    >
                                        {
                                        sliderDelta >= 0 ?
                                            'Add to '
                                        :
                                            'Remove from '  
                                        }
                                        {Math.abs(sliderDelta)} Lineups
                                    </button>

                                    <select 
                                        className="player-add-random" 
                                        onChange={onRandomChange}
                                    >
                                        <option value="random">Random</option>
                                        <option value="ordered">Ordered</option>
                                    </select>

                                    

                                </td>
                            </tr>
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