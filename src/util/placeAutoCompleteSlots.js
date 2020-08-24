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

    e = orderBy(e, ['exposureTotal'], ['asc'])
    let eOrder = []
    for(var i = 0; i < e.length; i++){
        eOrder.push(e[i].name)
    }

    // Starting to place players in lineups. This array catches any that won't fit
    numTries = 50
    let p = []

    // Going to attempt {numTries} times to fit all players in
    loopH:
    for(var h = 0; h < numTries; h++){

        let playersStillNeeded = []
        let unsortedP = cloneDeep(origP)
        unsortedP = orderBy(unsortedP, ['lineupsNeeded'], ['asc'])
    
        

        for(var i = 0; i < e.length; i++){
            for(var j = unsortedP.length -1; j >= 0; j--){
                if(e[i].name == unsortedP[j].position){
                    p.push(unsortedP[j])
                    unsortedP.splice(j, 1)
                }
            }
        }

        for(var i = 0; i < e.length; i++){
            for(var j = unsortedP.length -1; j >= 0; j--){
                if(unsortedP[j].positions.includes(e[i].name)){
                    
                    let sortedPositions = []
                    for(var k = 0; k < eOrder.length; k++){
                        for(var m = 0; m < unsortedP[j].positions.length; m++){
                            if(eOrder[k] == unsortedP[j].positions[m]){
                                sortedPositions.push(unsortedP[j].positions[m])
                            }
                        }
                    }

                    sortedPositions = uniq(concat(sortedPositions, unsortedP[j].positions))
                    unsortedP[j].positions = sortedPositions
                    
                    p.push(unsortedP[j])
                    unsortedP.splice(j, 1)
                }
            }
        }


        // Looping through each player
        for(var i = 0; i < p.length; i++){
            if(p[i].lineupsNeeded > 0){

                // Finds lineups player should be in
                const toAdd = findLineupsToAdd(p[i].id, p[i].positions, 'random', p[i].lineupsNeeded, l, p[i].lineupsIn, true)
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


            for(var i = 0; i < playersStillNeeded.length; i++){
                
                let shortPlayerPositions = playersStillNeeded[i].player.positions
                let shortPlayerId = playersStillNeeded[i].player.id
                
                for(var j = 0; j < playersStillNeeded[i].numShort; j++){
                    
                    loopK:
                    for(var k = slotsStillOpen.length -1; k >= 0; k--){
                        
                        let lineupIndex = findLineupIndex(l, slotsStillOpen[k].lid)
                        let sid = slotsStillOpen[k].sid
                        let slotPosition = l[lineupIndex].roster[sid].position

                        if( isPlayerInLineupWithRoster(shortPlayerId, l[lineupIndex].roster) ) continue

                        for(var m = 0; m < l[lineupIndex].roster.length; m++){
                            
                            let playerPositions = findPlayerPositions(p, l[lineupIndex].roster[m].player)
                            let playerSlot = l[lineupIndex].roster[m].position

                            
                            // See if both slots and players can be swapped
                            if(playerSlot && playerPositions){
                                if( playerPositions.includes(slotPosition) && shortPlayerPositions.includes(playerSlot) ){
                                    console.log("swappable")
                                    // Empty slot will be foundPlayer
                                    l[lineupIndex].roster[sid].player = l[lineupIndex].roster[m].player
                                    // FoundPlayer's slot will be filled by original player
                                    l[lineupIndex].roster[m].player = playersStillNeeded[i].player.id

                                    // Remove this slot from slotsStillOpen
                                    slotsStillOpen.splice(k, 1)
                            
                                    break loopK
                                }
                            }
                        }
                    }
                }
            }

            if(slotsStillOpen.length > 0){

                //Reset lineups and PlayersNeeded
                //Change this to forEach?
                for(var j = 0; j < l.length; j++){
                    for(var k = 0; k < l[j].roster.length; k++){
                        l[j].roster[k].player = null  // This will need to work differently if some slots are locked
                    }
                }

                p = []

                //playersStillNeeded = []
            } else break loopH

        } else break

        console.log(h)
        
    }

    // Need to add what to do if playersStillNeeded has requirements
    // Look in other lineups for player to switch to empty slot

    return{
        p,
        l
    }
}

export default placeAutoCompleteSlots