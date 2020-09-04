const markSlotsAsLocked = (lineups) => {

	lineups.forEach(function(lineup){
		lineup.roster.forEach(function(slot){
			if(slot.player) slot.locked = true
		})
	})

	return lineups
	
}

export default markSlotsAsLocked

