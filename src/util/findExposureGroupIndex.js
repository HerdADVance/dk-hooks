import findIndex from 'lodash/findIndex'

const findExposureGroupIndex = (position, groups) => {
	return findIndex(groups, function(o) { return o.name == position })
}

export default findExposureGroupIndex