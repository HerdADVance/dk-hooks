import shuffle from 'lodash/shuffle'
import findAcceptedSlotIds from './findAcceptedSlotIds'

const addToLineups = (pid, positions, random, delta, lineups) => {

	// Array to return
	let toAdd = []

	// Retrieve the list of accepted slot id's for this player
	let acceptedSlotIds = findAcceptedSlotIds(positions, lineups[0].roster)

	// Shuffle lineups if random is selected
	if(random === 'random') lineups = shuffle(lineups)

	// Looping through lineups
	for(let i = 0; i < lineups.length; i++){
		
		// Looping through accepted slots in lineup
		for(let j = 0; j < acceptedSlotIds.length; j++){
			
			const slot = lineups[i].roster[acceptedSlotIds[j]]

			// If slot is empty, push slot to toAdd array
			if(slot !== pid){
				toAdd.push(lineups[i].id)
				break
			}

		}

		// Number of lineups to add is reached so stop looping
		if(toAdd.length === delta) break

	}

	return toAdd

}

export default addToLineups