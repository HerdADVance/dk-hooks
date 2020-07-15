import forEach from 'lodash/forEach'
const findPlayerSalary = (players, pid) => {
	return players[pid].salary
}

export default findPlayerSalary