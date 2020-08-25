import React, { useState, useEffect } from 'react';

// DATA
import EXPOSUREOPTIONS from '../data/EXPOSUREOPTIONS'


const ExposureTotals = ({ exposureGroups, numLineups }) => {

    const targetTotal = EXPOSUREOPTIONS.total

    const [totalSalary, setTotalSalary] = useState(0)
    const [totalExposure, setTotalExposure] = useState(0)

     // Sort players into correct groups and calculate totals
    useEffect(() => {

        let salaryTotal = 0
        let exposureTotal = 0

        exposureGroups.forEach(function(group){
            console.log(parseFloat(group.exposureTotal))
            salaryTotal += group.salaryTotal
            exposureTotal += group.exposureTotal
        })

        setTotalSalary(salaryTotal)
        setTotalExposure(exposureTotal)

    }, [exposureGroups])

    return(
        
        <div className="exposure-group">
            <h1>Totals</h1>
            <table>
                <thead>
                    <tr>
                        <th>Group</th>
                        <th>Salary</th>
                        <th>Exp</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        exposureGroups.map((group, index) => (
                            <tr>
                                <td>{group.name}</td>
                                <td>{group.salaryTotal}</td>
                                <td>{group.exposureTotal}</td>
                                <td className="exposure-totals-range">{group.min} - {group.max}</td>
                            </tr>
                        ))
                    }
                        <tr>
                            <td>Total</td>
                            <td>{totalSalary}</td>
                            <td>{totalExposure}</td>
                        </tr>
                        <tr className="no-borders">
                            <td></td>
                            <td>{50000}</td>
                            <td>{targetTotal}</td>
                        </tr>
                </tbody>
            </table>
        </div>

    )

}

export default ExposureTotals
