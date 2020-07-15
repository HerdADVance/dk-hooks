import orderBy from 'lodash/orderBy'
import shuffle from 'lodash/shuffle'
import returnRandomInteger from './returnRandomInteger'
import areSlotsSwappable from './areSlotsSwappable'

const switchAutoCompleteSlots = (lineups) => {

	console.log(lineups)

	// What the main loop will determine
	let finalFirstLineupIndex = null
	let finalFirstRosterIndex = null
	let finalLastLineupIndex = null
	let finalLastRosterIndex = null

	// Randomizing lineups and roster spot. Looking to take one of the more expensive slots in an expensive lineup and replace it with a cheape slot in cheap lineup
	let firstLineupIndexes = shuffle([0,1,2,3,4])
	let firstRosterIndexes = shuffle([0,1,2,3])
	let lastLineupIndexes = shuffle([1,2,3,4])
	let lastRosterIndexes = shuffle([5,6,7])

	loop1:
	for(var i = 0; i < firstLineupIndexes.length; i++){
		let firstLineupIndex = firstLineupIndexes[i]
		for(var j = 0; j < firstRosterIndexes.length; j++){
			let firstRosterIndex = firstRosterIndexes[j]
			
			let firstSlotToCheck = lineups[firstLineupIndex].roster[firstRosterIndex]

			for(var k = 0; k < lastLineupIndexes.length; k++){
				let lastLineupIndex = lastLineupIndexes[k]
				for(var l = 0; l < lastRosterIndexes.length; l++){
					let lastRosterIndex = lastRosterIndexes[j]

					let lastSlotToCheck = lineups[lineups.length - lastLineupIndex].roster[lastRosterIndex]

					console.log(firstSlotToCheck)
					console.log(lastSlotToCheck)
					if(areSlotsSwappable(firstSlotToCheck, lastSlotToCheck)){

						finalFirstLineupIndex = firstLineupIndex
						finalFirstRosterIndex = firstRosterIndex
						finalLastLineupIndex = lastLineupIndex
						finalLastRosterIndex = lastRosterIndex
						break loop1
					}
				}
			}
		}
	}

	let firstSlot = lineups[finalFirstLineupIndex].roster[finalFirstRosterIndex]
	let lastSlot = lineups[lineups.length - finalLastLineupIndex].roster[finalLastRosterIndex]

	let firstPosition = firstSlot.position
	let lastPosition = lastSlot.position

	let firstPlayer = firstSlot.player
	let lastPlayer = lastSlot.player

	// console.log(firstPlayer)
	// console.log(lastPlayer)

	// Swap the players (these are the 2 lines messing up the console log first/lastSlotToCheck above)
	lineups[finalFirstLineupIndex].roster[finalFirstRosterIndex].player = lastPlayer
	lineups[lineups.length - finalLastLineupIndex].roster[finalLastRosterIndex].player = firstPlayer

	// Change the lineups' salary
	lineups[finalFirstLineupIndex].salary -= firstPlayer.salary
	lineups[finalFirstLineupIndex].salary += lastPlayer.salary
	lineups[lineups.length - finalLastLineupIndex].salary -= lastPlayer.salary
	lineups[lineups.length - finalLastLineupIndex].salary += firstPlayer.salary

	// Change the lineup roster's order based on salary
	lineups[finalFirstLineupIndex].roster = orderBy(lineups[finalFirstLineupIndex].roster, 'player.salary', ['desc'])
	lineups[lineups.length - finalLastLineupIndex].roster = orderBy(lineups[lineups.length - finalLastLineupIndex].roster, 'player.salary', ['desc'])

	return lineups
}

export default switchAutoCompleteSlots

