import findLineupIndex from './findLineupIndex'
import findSlotIndex from './findSlotIndex'
import orderBy from 'lodash/orderBy'

// Adds Players and total salary to lineups
const convertLineupsToOriginalFormat = (original, filled) => {
	
	for(var i = 0; i < original.length; i++){

		let lid = original[i].id
		let lineupIndex = findLineupIndex(filled, lid)

		for(var j = 0; j < original[i].roster.length; j++){
			
			let sid = original[i].roster[j].id
			let slotIndex = findSlotIndex(filled[lineupIndex].roster, sid)
			
			original[i].roster[j].player = filled[lineupIndex].roster[slotIndex].player.pid
		}

		original[i].roster = orderBy(original[i].roster, 'id', ['asc'])
		original[i].salary = filled[lineupIndex].salary
	}

	return original
}

export default convertLineupsToOriginalFormat
