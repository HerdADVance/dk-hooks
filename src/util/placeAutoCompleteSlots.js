import findLineupsToAdd from './findLineupsToAdd'
import addPlayerToTempLineups from './addPlayerToTempLineups'
import orderBy from 'lodash/orderBy'
import sortBy from 'lodash/sortBy'

const placeAutoCompleteSlots = (p, l, e, numTries) => {

    e = orderBy(e, ['exposureTotal'], ['asc'])
    p = orderBy(p, ['positions.length', 'lineupsNeeded'], ['asc', 'desc'])

    console.log(p)

    let sortedPlayers = []
    for(var i = 0; i < e.length; i++){
        for(var j = 0; j < p.length; j++){
            if(e[i].name == p[j].position){
                sortedPlayers.push(p[j])
                // pop player
            }
            // restart with players with more than 1 position but also 1st position
        }
    }

    console.log(sortedPlayers)

    // Starting to place players in lineups. This array catches any that won't fit
    let playersStillNeeded = []
    numTries = 1

    // Going to attempt {numTries} times to fit all players in
    for(var h = 0; h < numTries; h++){
        // Looping through each player
        for(var i = 0; i < p.length; i++){
            if(p[i].lineupsNeeded > 0){

                // Finds lineups player should be in
                const toAdd = findLineupsToAdd(p[i].id, p[i].positions, 'random', p[i].lineupsNeeded, l, p[i].lineupsIn)
                // Changes the lineupsIn property of player in state (removing this for now because it's irrelevant until the end)
                // p[i].lineupsIn = toAdd
                // Adds the player to the lineup in state
                l = addPlayerToTempLineups(p[i].id, toAdd, l)

                // Push the player into the failed array if necessary
                if(toAdd.length < p[i].lineupsNeeded){
                    playersStillNeeded.push({
                        player: p[i],
                        numShort: p[i].lineupsNeeded - toAdd.length
                    })
                }
                
            } else{
                // Remove this for now (see above) because also irrelevant
                // p[i].lineupsIn = []
            }
        }

        // HERE. Only need to reset lineups and players-lineupsIn

        

        // At least one instance of a player didn't fit so reset and try again (unless last time through)
        if(playersStillNeeded.length > 0){
            console.log('slots still open')

            let slotsStillOpen = []
            for(var j = 0; j < l.length; j++){
                for(var k = 0; k < l[j].roster.length; k++){
                    if(!l[j].roster[k].player){
                        console.log('adding open slot to list')
                        slotsStillOpen.push({
                            lid: l[j].id,
                            sid: l[j].roster[k].id,
                            pos: l[j].roster[k].position
                        })
                    }
                }
            }

            console.log(playersStillNeeded)
            console.log(slotsStillOpen)

            // Reset lineups and PlayersNeeded
            // Change this to forEach?
            // for(var j = 0; j < l.length; j++){
            //     for(var k = 0; k < l[j].roster.length; k++){
            //         l[j].roster[k].player = null  // This will need to work differently if some slots are locked
            //     }
            // }

            // playersStillNeeded = []

        } else break

        console.log(h)
        
    }

    // Need to add what to do if playersStillNeeded has requirements

    return{
        p,
        l
    }
}

export default placeAutoCompleteSlots