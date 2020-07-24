import findLineupIndex from './findLineupIndex'
import findSlotIndex from './findSlotIndex'
import orderBy from 'lodash/orderBy'

const convertLineupsToOriginalFormat = (original, filled) => {
	
	for(var i = 0; i < original.length; i++){
		
		let lid = original[i].id

		for(var j = 0; j < original[i].roster.length; j++){
			
			let sid = original[i].roster[j].id
			
			let lineupIndex = findLineupIndex(filled, lid)
			let slotIndex = findSlotIndex(filled[lineupIndex].roster, sid)
			
			original[i].roster[j].player = filled[lineupIndex].roster[slotIndex].player.pid
		}

		original[i].roster = orderBy(original[i].roster, 'id', ['asc'])
	}

	return original
}

export default convertLineupsToOriginalFormat
