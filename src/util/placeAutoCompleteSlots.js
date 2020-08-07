import findLineupsToAdd from './findLineupsToAdd'
import addPlayerToTempLineups from './addPlayerToTempLineups'

const placeAutoCompleteSlots = (p, l, numTries) => {

    // Starting to place players in lineups. This array catches any that won't fit
    let playersStillNeeded = []

    // Going to attempt 20 times to fit all players in
    for(var h = 0; h < numTries; h++){
        // Looping through each player
        for(var i = 0; i < p.length; i++){
            if(p[i].lineupsNeeded > 0){

                // Finds lineups player should be in
                const toAdd = findLineupsToAdd(p[i].id, p[i].positions, 'random', p[i].lineupsNeeded, l, p[i].lineupsIn)
                // Changes the lineupsIn property of player in state
                p[i].lineupsIn = toAdd
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
                p[i].lineupsIn = []
            }
        }

        // HERE. Only need to reset lineups and players-lineupsIn

        // At least one instance of a player didn't fit so reset and try again (unless last time through)
        if(playersStillNeeded.length > 0 && h !== numTries){
            console.log('trying again')
            
            playersStillNeeded = []

            // Reset lineups
            // Change this to forEach?
            for(var j = 0; j < l.length; j++){
                for(var k = 0; k < l[j].roster.length; k++){
                    l[j].roster[k].player = null  // This will need to work differently if some slots are locked
                }
            }

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