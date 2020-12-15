import forEach from 'lodash/forEach'
const calculateLineupSalary = (roster, players) => {
	
	let salary = 0

	roster.forEach(function(slot){
		if(players[slot.player]) salary += players[slot.player].salary
	})

	return salary
}

export default calculateLineupSalary