import orderBy from 'lodash/orderBy'
import cloneDeep from 'lodash/cloneDeep'

const emptyLineupsIn = (p) => {
	
	let pArr = cloneDeep(p)
	pArr = orderBy(p, 'id', ['asc'])

	for(var i = 0; i < pArr.length; i++){
		let pid = pArr[i].id
		p[pid].lineupsIn = []
	}

	return p
}

export default emptyLineupsIn