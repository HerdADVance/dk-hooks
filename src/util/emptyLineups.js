import orderBy from 'lodash/orderBy'
import cloneDeep from 'lodash/cloneDeep'

const emptyLineups = (l) => {

	for(var i = 0; i < l.length; i++){
		for(var j = 0; j < l[i].roster.length; j++){
			l[i].roster[j].player = null
		}
	}

	return l
}

export default emptyLineups