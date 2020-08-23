import findPlayerIndex from './findPlayerIndex'
import forEach from 'lodash/forEach'
const findPlayerPositions = (players, pid) => {

	let isArray = players instanceof Array
	let positions = null

	// if p is array, loop til match
	if(isArray){
		for(var i = 0; i < players.length; i++){
			if(players[i].id == pid){
				positions = players[i].positions
				break
			}
		}
	} 

	// It's an object so do it this way
	else positions = players[pid].positions

	
	return positions
}

export default findPlayerPositions