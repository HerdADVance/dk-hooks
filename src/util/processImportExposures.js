import orderBy from 'lodash/orderBy'
import cloneDeep from 'lodash/cloneDeep'

const processImportExposures = (p, l, exposuresData) => {
	
	let pArr = cloneDeep(p)
	pArr = orderBy(p, 'id', ['asc'])

	let counter = 0
	for(var i = 0; i < pArr.length; i++){
		let pid = pArr[i].id
		p[pid].lineupsIn = []
		p[pid].exposure = exposuresData[counter]
		counter ++
	}

	for(var i = 0; i < l.length; i++){
		let lid = l[i].id
		for(var j = 0; j < l[i].roster.length; j++){
			let pid = l[i].roster[j].player
			if(pid) p[pid].lineupsIn.push(lid)
		}
	}

	return p
}

export default processImportExposures