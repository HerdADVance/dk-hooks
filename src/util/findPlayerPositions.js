import forEach from 'lodash/forEach'
const findPlayerPositions = (players, pid) => {
	return players[pid].positions
}

export default findPlayerPositions