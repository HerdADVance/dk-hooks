import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';

const ClickedPlayer = ({ player, numLineups, random, handlePlayerActionClick, onRandomChange }) => {

    const [sliderValue, setSliderValue] = useState(0)
    const [sliderDelta, setSliderDelta] = useState(0)

    // Update the slider with correct info when lineupsIn length changes
    useEffect(() => {
        setSliderValue(player.lineupsIn.length)
        setSliderDelta(0)
    }, [player.lineupsIn.length])

    
    // FUNCTIONS

    function onAfterSliderChange() {
        setSliderDelta(sliderValue - player.lineupsIn.length)
    }

    function onSliderChange(value) {
        setSliderValue(value)
    }

    return(
        
        <tr className="player-action">
            <td colSpan="7">
                <p>{player.name} is currently in {player.lineupsIn.length} of {numLineups} lineups</p>
                
                <Slider 
                    value={sliderValue}
                    min={0}
                    max={numLineups}
                    onChange={onSliderChange} 
                    onAfterChange={onAfterSliderChange}
                />
                <button
                    className={"player-add-button " + (sliderDelta >= 0 ? 'positive' : 'negative') }
                    onClick={() => handlePlayerActionClick(player.id, player.positions, random, sliderDelta) }
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
                    value={random}
                >
                    <option value="ordered">Ordered</option>
                    <option value="random">Random</option>
                </select>

                

            </td>
        </tr>

    )

}

export default ClickedPlayer


