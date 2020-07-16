import orderBy from 'lodash/orderBy'
import shuffle from 'lodash/shuffle'
import returnRandomInteger from './returnRandomInteger'
import areSlotsSwappable from './areSlotsSwappable'

const switchAutoCompleteSlots = async (lineups, indexes) => {

	let firstLineupIndex = indexes.firstLineupIndex
	let firstRosterIndex = indexes.firstRosterIndex
	let lastLineupIndex = indexes.lastLineupIndex
	let lastRosterIndex = indexes.lastRosterIndex

	let firstSlot = lineups[firstLineupIndex].roster[firstRosterIndex]
	let lastSlot = lineups[lineups.length - lastLineupIndex].roster[lastRosterIndex]

	let firstPosition = firstSlot.position
	let lastPosition = lastSlot.position

	let firstPlayer = firstSlot.player
	let lastPlayer = lastSlot.player

	// console.log(firstPlayer)
	// console.log(lastPlayer)

	// Swap the players (these are the 2 lines messing up the console log first/lastSlotToCheck above)
	lineups[firstLineupIndex].roster[firstRosterIndex].player = lastPlayer
	lineups[lineups.length - lastLineupIndex].roster[lastRosterIndex].player = firstPlayer

	// Change the lineups' salary
	lineups[firstLineupIndex].salary -= firstPlayer.salary
	lineups[firstLineupIndex].salary += lastPlayer.salary
	lineups[lineups.length - lastLineupIndex].salary -= lastPlayer.salary
	lineups[lineups.length - lastLineupIndex].salary += firstPlayer.salary

	// Change the lineup roster's order based on salary
	lineups[firstLineupIndex].roster = orderBy(lineups[firstLineupIndex].roster, 'player.salary', ['desc'])
	lineups[lineups.length - lastLineupIndex].roster = orderBy(lineups[lineups.length - lastLineupIndex].roster, 'player.salary', ['desc'])

	return lineups
}

export default switchAutoCompleteSlots

