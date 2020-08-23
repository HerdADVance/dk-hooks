
const isPlayerInLineupWithRoster = (pid, roster) => {
	
	for(var i = 0; i < roster.length; i++){
		if(roster[i].player == pid) return true
	}
	
	return false
	
}

export default isPlayerInLineupWithRoster