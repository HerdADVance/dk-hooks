
const isAnotherSlotSelected = (lineups) => {
	
	for(var i = 0; i < lineups.length; i++){
		for(var j = 0; j < lineups[i].roster.length; j++){
			if(lineups[i].roster[j].selected){
				return{
					lid: lineups[i].id,
					sid: lineups[i].roster[j].id,
					pid: lineups[i].roster[j].player
				}
			}
		}
	}
	
	return false
	
}

export default isAnotherSlotSelected