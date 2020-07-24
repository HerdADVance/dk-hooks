import findIndex from 'lodash/findIndex'

const findSlotIndex = (roster, sid) => {
	return findIndex(roster, function(o) { return o.id == sid })
}

export default findSlotIndex