import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import filter from 'lodash/filter'
import includes from 'lodash/includes'


const ClickedPlayer = ({
    stackable,
    player, 
    numLineups, 
    random, 
    onRandomChange, 
    selectedSlots,
    handlePlayerActionClick, 
    handlePlayerAddToSelectedClick
}) => {


    const [sliderValue, setSliderValue] = useState(0)
    const [sliderDelta, setSliderDelta] = useState(0)
    const [selectableSlots, setSelectableSlots] = useState([])

    const [stackedPlayers, setStackedPlayers] = useState({})

    // Update the slider with correct info when lineupsIn length changes
    useEffect(() => {
        setSliderValue(player.lineupsIn.length)
        setSliderDelta(0)
    }, [player.lineupsIn.length])


    // Make sure all selected slots are right position for clicked player and don't already have player
    useEffect(() => {
        let result = []
        selectedSlots.forEach(function(slot){
            if (player.positions.includes(slot.position) && !player.lineupsIn.includes(slot.lid)) result.push(slot)
        })
        setSelectableSlots(result)

    }, [selectedSlots])
    
    

    // FUNCTIONS

    function handleStackAddToLineupsClick(){
        console.log(stackedPlayers)
        console.log(player.id)
    }

    function onStackInputChange(val, pid){
        let sp = {...stackedPlayers}
        console.log(sp)

        if(pid){
            sp[pid] = parseInt(val)
        }
        
        setStackedPlayers(sp)
    }

    function onAfterSliderChange() {
        setSliderDelta(sliderValue - player.lineupsIn.length)
    }

    function onSliderChange(value) {
        setSliderValue(value)
    }

    return(
        
        <tr className="player-action">
            <td colSpan="8">
                
                {selectedSlots.length > 0 ?

                    <>

                    <p>{player.name} is currently in {player.lineupsIn.length} of {numLineups} lineups</p>

                    <button
                        onClick={() => handlePlayerAddToSelectedClick(player.id, player.positions, selectableSlots)}
                    >
                        Add to {selectableSlots.length} lineups
                    </button>

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
                    </>

                :

                    <div className="player-stacks">
                       
                        {
                            stackable?

                            stackable.teammates.qbs.map((sp, index) => (
                                <p>{}</p>
                            ))

                            :

                            ''
                        }

                        <p>{player.name} is in {player.lineupsIn.length} lineups. Needs added to {player.exposure * 1.5 - player.lineupsIn.length} lineups.</p> 
                        <table><thead></thead><tbody>
                            {stackable.teammates.qbs.map((p, index) => (
                                <tr>
                                    <td>QB</td>
                                    <td>{p.name}</td>
                                    <td>
                                        <input 
                                            className="stack-num" 
                                            type="text"
                                            onChange={(e) => onStackInputChange(e.target.value, p.id) }
                                        /> 
                                    </td>
                                    <td><span class="mini">max</span>{p.lineupsIn.length}</td>
                                </tr>
                            ))}
                            {stackable.opponents.qbs.map((p, index) => (
                                <tr>
                                    <td>Opp QB</td>
                                    <td>{p.name}</td>
                                    <td>
                                        <input 
                                            className="stack-num" 
                                            type="text"
                                            onChange={(e) => onStackInputChange(e.target.value, p.id) }
                                        /> 
                                    </td>
                                    <td><span class="mini">max</span>{p.lineupsIn.length}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>Random QB</td>
                                <td>---</td>
                                <td>
                                    <input 
                                        className="stack-num" 
                                        type="text"
                                        onChange={(e) => onStackInputChange(e.target.value) }
                                    /> 
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colSpan="2"></td>
                                <td>{player.exposure * 1.5 - player.lineupsIn.length}</td>
                            </tr>
                        </tbody></table>

                        <button 
                            onClick={() => handleStackAddToLineupsClick() }
                        >
                            Add to Lineups
                        </button>
                    </div>

                }

            </td>
        </tr>

    )

}

export default ClickedPlayer


