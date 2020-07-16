import orderBy from 'lodash/orderBy'
import shuffle from 'lodash/shuffle'
import returnRandomInteger from './returnRandomInteger'
import areSlotsSwappable from './areSlotsSwappable'

const findAutoCompleteSlotsToSwitch = async (lineups) => {

	// What the main loop will determine
	let firstLineupIndex = null
	let firstRosterIndex = null
	let lastLineupIndex = null
	let lastRosterIndex = null

	// Randomizing lineups and roster spot. Looking to take one of the more expensive slots in an expensive lineup and replace it with a cheape slot in cheap lineup
	let firstLineupIndexes = shuffle([0,1,2,3,4])
	let firstRosterIndexes = shuffle([0,1,2,3])
	let lastLineupIndexes = shuffle([1,2,3,4])
	let lastRosterIndexes = shuffle([5,6,7])

	//function findIndexes(firstLineupIndexes, firstRosterIndexes, lastLineupIndexes, lastRosterIndexes){
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

						let swappable = false
						swappable = areSlotsSwappable(firstSlotToCheck, lastSlotToCheck)
						if(swappable){
							return {firstLineupIndex, firstRosterIndex, lastLineupIndex, lastRosterIndex}

							//break loop1

						}
					}
				}
			}
		}
	//}

	// const indexData = findIndexes(firstLineupIndexes, firstRosterIndexes, lastLineupIndexes, lastRosterIndexes)
	// //({firstLineupIndex, firstRosterIndex, lastLineupIndex, lastRosterIndex} = indexData)

	// firstLineupIndex = indexData.firstLineupIndex
	// firstRosterIndex = indexData.firstRosterIndex
	// lastLineupIndex = indexData.lastLineupIndex
	// lastRosterIndex = indexData.lastRosterIndex

	// console.log(firstLineupIndex)
	// console.log(firstRosterIndex)
	// console.log(lastLineupIndex)
	// console.log(lastRosterIndex)

	// let firstSlot = lineups[firstLineupIndex].roster[firstRosterIndex]
	// let lastSlot = lineups[lineups.length - lastLineupIndex].roster[lastRosterIndex]

	// let firstPosition = firstSlot.position
	// let lastPosition = lastSlot.position

	// let firstPlayer = firstSlot.player
	// let lastPlayer = lastSlot.player

	// // console.log(firstPlayer)
	// // console.log(lastPlayer)

	// // Swap the players (these are the 2 lines messing up the console log first/lastSlotToCheck above)
	// lineups[firstLineupIndex].roster[firstRosterIndex].player = lastPlayer
	// lineups[lineups.length - lastLineupIndex].roster[lastRosterIndex].player = firstPlayer

	// // Change the lineups' salary
	// lineups[firstLineupIndex].salary -= firstPlayer.salary
	// lineups[firstLineupIndex].salary += lastPlayer.salary
	// lineups[lineups.length - lastLineupIndex].salary -= lastPlayer.salary
	// lineups[lineups.length - lastLineupIndex].salary += firstPlayer.salary

	// // Change the lineup roster's order based on salary
	// lineups[firstLineupIndex].roster = orderBy(lineups[firstLineupIndex].roster, 'player.salary', ['desc'])
	// lineups[lineups.length - lastLineupIndex].roster = orderBy(lineups[lineups.length - lastLineupIndex].roster, 'player.salary', ['desc'])

	// return lineups
}

export default findAutoCompleteSlotsToSwitch

