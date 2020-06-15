const findAcceptedSlotIds = (positions, roster) => {
	
	let ids = []

	roster.forEach(function(slot){
		if(positions.includes(slot.position)) ids.push(slot.id)
	})

	return ids
}

export default findAcceptedSlotIds