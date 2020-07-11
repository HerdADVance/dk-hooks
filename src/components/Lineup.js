import React, { useState, useEffect } from 'react';

const Lineup = ({ lineup, orderNumber, referencePlayers, handleSlotClick }) => {

    const [salary, setSalary] = useState(0)

    // Do salary math
    useEffect(() => {

        let total = 0
        lineup.roster.forEach(function(slot){
            if(slot.player) total += referencePlayers[slot.player].salary
        })

        setSalary(total)


    }, [JSON.stringify(lineup.roster)]) // is there a better way to catch updates than stringify?


    return(

        <table className="lineup"><thead>
            <tr>
                <th colSpan="4">Lineup # {lineup.id} ({orderNumber + 1})</th>
            </tr></thead><tbody>
            {
            lineup.roster.map((slot, index) => (

                <tr 
                    className={slot.selected? 'selected' : ''} 
                    key={slot.id} 
                    onClick={() => handleSlotClick(lineup.id, slot.id, slot.player, slot.selected)}
                >
                    <td>{slot.position}</td>
                    {slot.player ? 
                        <>
                        <td>{referencePlayers[slot.player].name}</td>
                        <td className={`team ${referencePlayers[slot.player].team}`}>{referencePlayers[slot.player].team}</td>
                        <td>{referencePlayers[slot.player].salary}</td>
                        </>
                    :
                        <><td></td><td></td><td></td></>
                    }
                </tr>

            ))
            }

            <tr className={"total " + (salary >= 50000 ? 'negative' : 'positive') }>
                <td colSpan="2">Remaining: {50000 - salary}</td>
                <td colSpan="2">{salary}</td>
            </tr>
        </tbody></table>

    )
}

export default Lineup