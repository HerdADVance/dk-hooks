
const convertPlayersToOriginalFormat = (playersObject, p) => {

	console.log(p)
	
	for(var i = 0; i < p.length; i++){

		let pid = p[i].id
		let formattedLineupsIn = []

		for(var j = 0; j < p[i].lineupsIn.length; j++){
			formattedLineupsIn.push(p[i].lineupsIn[j].lid)
		}

		playersObject[pid].lineupsIn = formattedLineupsIn
		
	}

	return playersObject
}

export default convertPlayersToOriginalFormat
