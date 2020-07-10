const findAcceptedSlotIds = (positions, roster) => {

	// Will pass this in dynamically later
	const defenseAllowedInUtil = false

	let ids = []

	roster.forEach(function(slot){
		if(positions.includes(slot.position)){
			// also will make this dynamic
			if(positions[0] === 'D' && !defenseAllowedInUtil && slot.position == 'UTIL') console.log('')
				else ids.push(slot.id)
		}
	})

	return ids
}

export default findAcceptedSlotIds