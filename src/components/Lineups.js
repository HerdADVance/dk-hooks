import React from 'react';

const Lineups = ({ lineups, handleSlotClick }) => {

    return(

        <div className="lineups-wrap">
            {
            lineups?
                lineups.map((lineup, index) => (
                    <table className="lineup"><thead>
                        <tr>
                            <th colSpan="4">Lineup # {lineup.id}</th>
                        </tr></thead><tbody>
                        {
                        lineup.roster.map((slot, index) => (
                            <tr key={slot.id} onClick={() => handleSlotClick(lineup.id, slot.id)}>
                                <td>{slot.position}</td>
                                <td>{slot.player ? slot.player.Name : ''}</td>
                                <td>{slot.player ? slot.player.Salary : ''}</td>
                                <td>{slot.player ? '-' : '+'}</td>
                            </tr>
                        ))
                        }
                        <tr className={"total " + (lineup.salary >= 0 ? 'positive' : 'negative') }>
                            <td colSpan="2">Remaining: {lineup.salary}</td>
                            <td colSpan="2">{50000 - lineup.salary}</td>
                        </tr>
                    </tbody></table>
                ))
            :
                <p>Loading lineups</p>
            }
        </div>

    )
}

export default Lineups