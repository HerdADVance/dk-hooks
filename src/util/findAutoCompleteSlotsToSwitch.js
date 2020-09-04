import orderBy from 'lodash/orderBy'
import shuffle from 'lodash/shuffle'
import includes from 'lodash/includes'
import uniq from 'lodash/uniq'
import returnRandomInteger from './returnRandomInteger'
import areSlotsSwappable from './areSlotsSwappable'
import returnRandomLineupIndexes from './returnRandomLineupIndexes'

const findAutoCompleteSlotsToSwitch = (lineups) => {

	// What the main loop will determine
	let firstLineupIndex = null
	let firstRosterIndex = null
	let lastLineupIndex = null
	let lastRosterIndex = null

	// Randomizing lineups and roster spot. Looking to take one of the more expensive slots in an expensive lineup and replace it with a cheape slot in cheap lineup
	let firstLineupIndexes = returnRandomLineupIndexes(lineups.length, true)
	let firstRosterIndexes = uniq(shuffle([0,0,0,0,0,0,1,1,1,1,2,2,3]))
	let lastLineupIndexes = returnRandomLineupIndexes(lineups.length, false)
	let lastRosterIndexes = uniq(shuffle([7,7,7,7,7,7,6,6,6,6,5,5,4]))

	//function findIndexes(firstLineupIndexes, firstRosterIndexes, lastLineupIndexes, lastRosterIndexes){
		loop1:
		for(var i = 0; i < firstLineupIndexes.length; i++){
			let firstLineupIndex = firstLineupIndexes[i]

			for(var j = 0; j < firstRosterIndexes.length; j++){
				let firstRosterIndex = firstRosterIndexes[j]
				
				let firstSlotToCheck = lineups[firstLineupIndex].roster[firstRosterIndex]
				if(firstSlotToCheck.locked) continue

				for(var k = 0; k < lastLineupIndexes.length; k++){
					
					let lastLineupIndex = lastLineupIndexes[k]
					if(lineups[firstLineupIndex].id == lineups[lineups.length - lastLineupIndex].id) continue
					
					for(var l = 0; l < lastRosterIndexes.length; l++){
						let lastRosterIndex = lastRosterIndexes[l]

						let lastSlotToCheck = lineups[lineups.length - lastLineupIndex].roster[lastRosterIndex]
						if(lastSlotToCheck.locked) continue

						//console.log(firstSlotToCheck)
						//console.log(lastSlotToCheck)

						if(
							includes(firstSlotToCheck.player.positions, lastSlotToCheck.position) 
							&& 
							includes(lastSlotToCheck.player.positions, firstSlotToCheck.position) 
						){
							let dupePlayer = false
							for(var m = 0; m < lineups[firstLineupIndex].roster.length; m++){
								if(
									firstSlotToCheck.player.pid == lineups[lineups.length - lastLineupIndex].roster[m].player.pid
									||
									lastSlotToCheck.player.pid == lineups[firstLineupIndex].roster[m].player.pid
								){
									dupePlayer = true
									break
								}
							}
							if(!dupePlayer) return {firstLineupIndex, firstRosterIndex, lastLineupIndex, lastRosterIndex}
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

