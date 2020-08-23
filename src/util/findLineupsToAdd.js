import shuffle from 'lodash/shuffle'
import findAcceptedSlotIds from './findAcceptedSlotIds'

const findLineupsToAdd = (pid, positions, random, delta, lineups, lineupsIn, forceFirst) => {

	// Array to return
	let toAdd = []

	// Retrieve the list of accepted slot id's for this player
	let acceptedSlotIds = findAcceptedSlotIds(positions, lineups[0].roster)

	// Shuffle lineups if random is selected
	if(random === 'random') lineups = shuffle(lineups)

	// Start the main loop through lineups
	for(let i = 0; i < lineups.length; i++){

		// Skip this lineup if player already in it
		if (lineupsIn.includes(lineups[i].id)) continue

		// Looping through potential slots in each lineup
		for(let j = 0; j < acceptedSlotIds.length; j++){
			
			// Making current iteration more readable
			const slot = lineups[i].roster[acceptedSlotIds[j]]

			// If slot is empty, push slot to toAdd array
			if(!slot.player && slot.player != pid){
				toAdd.push({
					lid: lineups[i].id,
					sid: slot.id
				})
				break
			}

			// Will skip other accepted slots if true
			if(forceFirst) break

		}

		// Number of lineups to add is reached so stop looping
		if(toAdd.length === delta) break

	}


	// Do it all again if needed
	if(toAdd.length < delta){
		for(let i = 0; i < lineups.length; i++){

		// Skip this lineup if player already in it
		if (lineupsIn.includes(lineups[i].id)) continue

		// Looping through potential slots in each lineup
		for(let j = 1; j < acceptedSlotIds.length; j++){
			
			// Making current iteration more readable
			const slot = lineups[i].roster[acceptedSlotIds[j]]

			// If slot is empty, push slot to toAdd array
			if(!slot.player && slot.player != pid){
				toAdd.push({
					lid: lineups[i].id,
					sid: slot.id
				})
				break
			}

			if(forceFirst) break

		}

		// Number of lineups to add is reached so stop looping
		if(toAdd.length === delta) break

		}		

	}


	// Do it all again if needed
	if(toAdd.length < delta){
		for(let i = 0; i < lineups.length; i++){

		// Skip this lineup if player already in it
		if (lineupsIn.includes(lineups[i].id)) continue

		// Looping through potential slots in each lineup
		for(let j = 2; j < acceptedSlotIds.length; j++){
			
			// Making current iteration more readable
			const slot = lineups[i].roster[acceptedSlotIds[j]]

			// If slot is empty, push slot to toAdd array
			if(!slot.player && slot.player != pid){
				toAdd.push({
					lid: lineups[i].id,
					sid: slot.id
				})
				break
			}

			if(forceFirst) break

		}

		// Number of lineups to add is reached so stop looping
		if(toAdd.length === delta) break

		}		

	}


	// Do it all again if needed
	if(toAdd.length < delta){
		for(let i = 0; i < lineups.length; i++){

		// Skip this lineup if player already in it
		if (lineupsIn.includes(lineups[i].id)) continue

		// Looping through potential slots in each lineup
		for(let j = 3; j < acceptedSlotIds.length; j++){
			
			// Making current iteration more readable
			const slot = lineups[i].roster[acceptedSlotIds[j]]

			// If slot is empty, push slot to toAdd array
			if(!slot.player && slot.player != pid){
				toAdd.push({
					lid: lineups[i].id,
					sid: slot.id
				})
				break
			}

			if(forceFirst) break

		}

		// Number of lineups to add is reached so stop looping
		if(toAdd.length === delta) break

		}		

	}


	// Do it all again if needed
	if(toAdd.length < delta){
		for(let i = 0; i < lineups.length; i++){

		// Skip this lineup if player already in it
		if (lineupsIn.includes(lineups[i].id)) continue

		// Looping through potential slots in each lineup
		for(let j = 4; j < acceptedSlotIds.length; j++){
			
			// Making current iteration more readable
			const slot = lineups[i].roster[acceptedSlotIds[j]]

			// If slot is empty, push slot to toAdd array
			if(!slot.player && slot.player != pid){
				toAdd.push({
					lid: lineups[i].id,
					sid: slot.id
				})
				break
			}

			if(forceFirst) break

		}

		// Number of lineups to add is reached so stop looping
		if(toAdd.length === delta) break

		}		

	}


	return toAdd

}

export default findLineupsToAdd