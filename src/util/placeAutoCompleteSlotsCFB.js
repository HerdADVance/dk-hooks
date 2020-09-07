import findLineupsToAdd from './findLineupsToAdd'
import addPlayerToTempLineups from './addPlayerToTempLineups'
import findLineupIndex from './findLineupIndex'
import findPlayerPositions from './findPlayerPositions'
import isPlayerInLineupWithRoster from './isPlayerInLineupWithRoster'
import orderBy from 'lodash/orderBy'
import sortBy from 'lodash/sortBy'
import includes from 'lodash/includes'
import concat from 'lodash/concat'
import uniq from 'lodash/uniq'
import cloneDeep from 'lodash/cloneDeep'

const placeAutoCompleteSlots = (origP, l, e, numTries) => {

    console.log(origP)

    // Players will be pushed into this array based on position
    let p = []

    // This will catch players that won't fit
    let playersStillNeeded = []

    // Sorts exposures from least used to most used position. For CFB, QB will always be the least used position and we want to check this first
    e = orderBy(e, ['exposureTotal'], ['asc'])
    let eOrder = []
    for(var i = 0; i < e.length; i++){
        eOrder.push(e[i].name)
    }

    // Pushing the players into p based on their position
    for(var i = 0; i < e.length; i++){
        for(var j = 0; j < origP.length; j++){
            if(e[i].name == origP[j].position && origP[j].lineupsNeeded > 0){
                p.push(origP[j])
            }
        }
    }

    // p is now sorted 
    console.log(p)

    // Looping through each player
    for(var i = 0; i < p.length; i++){

            // Finds lineups player should be in
            const toAdd = findLineupsToAdd(p[i].id, p[i].positions, 'random', p[i].lineupsNeeded, l, p[i].lineupsIn, true)
            // Changes the lineupsIn property of player in state (removing this for now because it's irrelevant until the end)
            // p[i].lineupsIn = toAdd
            l = addPlayerToTempLineups(p[i].id, toAdd, l)

            // Push the player into the failed array if necessary
            if(toAdd.length < p[i].lineupsNeeded){
                playersStillNeeded.push({
                    player: p[i],
                    numShort: p[i].lineupsNeeded - toAdd.length
                })
            }

    }

    console.log(playersStillNeeded)

    return l
}

export default placeAutoCompleteSlots