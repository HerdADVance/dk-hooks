import React from 'react';

const Exposures = ({ filteredPlayers }) => {

    return(
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                filteredPlayers?
                    filteredPlayers.map((player, index) => (
                        <tr>
                            <td>{player.name}</td>
                            <td>{player.salary}</td>
                        </tr>
                    ))
                :
                    ''
                }
            </tbody>
        </table>

    )

}

export default Exposures


