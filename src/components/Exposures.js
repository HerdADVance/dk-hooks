import React, { useState, useEffect } from "react";
import orderBy from 'lodash/orderBy'

// DATA
import EXPOSUREOPTIONS from '../data/EXPOSUREOPTIONS'

// UTIL
import findExposureGroupIndex from '../util/findExposureGroupIndex'

// COMPONENTS
import ExposureGroup from './ExposureGroup'
import ExposureTotals from './ExposureTotals'


const Exposures = ({ players, handleExposureChange, numLineups }) => {

    const [exposureGroups, setExposureGroups] = useState(EXPOSUREOPTIONS.groups)

    // Sort players into correct groups and calculate totals
    useEffect(() => {

        // Using this to convert from obj to arr
        players = orderBy(players, 'salary', ['desc'])

        let result = [...exposureGroups]

        // Empty group's players
        result.forEach(function(group){
            group.players = []
        })

        // Loop through players to sort into right groups
        players.forEach(function(player){
            player.positions.forEach(function(position){
                let exposureGroupIndex = findExposureGroupIndex(position, exposureGroups)
                if(exposureGroupIndex != -1) result[exposureGroupIndex].players.push(player)
            })
        })

        // Math for totals
        result.forEach(function(group){
            let salaryTotal = 0
            let exposureTotal = 0
            group.players.forEach(function(player){
                let salary = (player.exposure * player.salary / 100)
                let exposure = parseInt(player.exposure)
                if (player.positions.length > 2){
                    salary = salary * 0.5
                    exposure = exposure * 0.5
                }
                salaryTotal  += salary
                exposureTotal += exposure
            })
            group.salaryTotal = salaryTotal
            group.exposureTotal = exposureTotal
        })

        setExposureGroups(result)

    }, [players])

    return(
        <>
        {exposureGroups.map((group, index) => (
            <ExposureGroup
                group={group}
                handleExposureChange={handleExposureChange}
            />
        ))}

        <ExposureTotals
            exposureGroups={exposureGroups}
            numLineups={numLineups}
        />

        </>
    )

}

export default Exposures

