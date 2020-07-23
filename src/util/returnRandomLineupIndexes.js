import shuffle from 'lodash/shuffle'
import uniq from 'lodash/uniq'

const returnRandomLineupIndexes = (num, first) => {

	let possible = null

	if(num >= 50)
		possible = 10
	
	if(num >= 40 && num < 50)
		possible = 9

	if(num >= 30 && num < 40)
		possible = 8
	
	if(num >= 20 && num < 30)
		possible = 7
	
	if(num >= 15 && num < 20)
		possible = 7
	
	if(num >= 10 && num < 15)
		possible = 6
	
	if(num < 10)
		possible = num

	let arr = []
	let counter = 1
	let stop = -1
	if(!first) stop = 0

	for(var i = possible - 1; i > stop; i--){
		for(var j = 0; j < counter; j++){
			arr.push(i)
		}
		counter ++
	}

	return uniq(shuffle(arr))
}

export default returnRandomLineupIndexes
