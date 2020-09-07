
const convertPlayersToOriginalFormat = (playersObject, p, l) => {
	
	// Emptying lineups in for each player
	for(var i = 0; i < p.length; i++){
		let pid = p[i].id
		playersObject[pid].lineupsIn = []
	}

	// Looping through all lineups to add lineupsIn to players
	for (var i = 0; i < l.length; i++){
		let lid = l[i].id
		for(var j = 0; j < l[i].roster.length; j++){
			let pid = l[i].roster[j].player.pid
			playersObject[pid].lineupsIn.push(lid)
		}
	}

	return playersObject
}

export default convertPlayersToOriginalFormat
