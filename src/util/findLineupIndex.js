import findIndex from 'lodash/findIndex'

const findLineupIndex = (lineups, lid) => {
	return findIndex(lineups, function(o) { return o.id == lid })
}

export default findLineupIndex