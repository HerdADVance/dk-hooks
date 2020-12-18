
const findPlayerOpponent = (playerTeam, playerGame) => {

	let teams = playerGame.split('@')
	teams[1] = teams[1].split(' ')[0]

	if(teams[0] == playerTeam) return teams[1]
		else return teams[0]

}

export default findPlayerOpponent