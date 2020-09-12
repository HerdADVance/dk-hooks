import React, { useState, useEffect } from 'react';


const ExposureGroup = ({ group, handleExposureChange }) => {

    //const [currentTotal, setCurrentTotal] = useState(0)

    // useEffect(() => {

    //     let salaryTotal = 0
    //     let exposureTotal = 0

    //     group.players.forEach(function(player){
    //         salaryTotal  += (player.exposure * player.salary)
    //         exposureTotal += parseInt(player.exposure)
    //     })

    //     console.log(salaryTotal)
    //     console.log(exposureTotal)

    // }, [group.players])

    return(
        
        <div className="exposure-group">
            <h1>{group.name}</h1>
            <table className="exposure-players">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Salary</th>
                        <th>% Exp</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        group.players.map((player, index) => (
                            <tr>
                                <td>{player.name}</td>
                                <td className={`team ${player.team}`}>{player.team}</td>
                                <td>{player.salary}</td>
                                <td>
                                    <input 
                                        type="number"
                                        value={player.exposure}
                                        onChange={(e) => handleExposureChange(player.id, e.target.value)}
                                        min="0"
                                        max="100"
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )

}

export default ExposureGroup
