
const markAllSlotsAsUnselected = (lineups) => {
	
	for(var i = 0; i < lineups.length; i++){
		for(var j = 0; j < lineups[i].roster.length; j++){
			lineups[i].roster[j].selected = false
		}
	}
	
	return lineups
	
}

export default markAllSlotsAsUnselected