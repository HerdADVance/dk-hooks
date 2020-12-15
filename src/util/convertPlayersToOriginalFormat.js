
const convertPlayersToOriginalFormat = (playersObject, p, l) => {

	console.log(playersObject)
	console.log(p)
	console.log(l)
	
	// Emptying lineups in for each player
	for(var i = 0; i < p.length; i++){
		let pid = p[i].id
		playersObject[pid].lineupsIn = []
	}

	// Looping through all lineups to add lineupsIn to players
	for (var i = 0; i < l.length; i++){
		let lid = l[i].id
		for(var j = 0; j < l[i].roster.length; j++){
			if(l[i].roster[j].player){
				let pid = l[i].roster[j].player.pid
				playersObject[pid].lineupsIn.push(lid)
			}
		}
	}

	return playersObject
}

export default convertPlayersToOriginalFormat
