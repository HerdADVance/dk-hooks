import forEach from 'lodash/forEach'
const findPlayerTeam = (players, pid) => {
	return players[pid].team
}

export default findPlayerTeam