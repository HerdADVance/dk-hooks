// This will only work when players is functioning as an array
import findIndex from 'lodash/findIndex'

const findPlayerIndex = (players, pid) => {
	return findIndex(players, function(o) { return o.id == pid })
}

export default findPlayerIndex