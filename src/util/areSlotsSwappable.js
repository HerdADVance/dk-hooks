import includes from 'lodash/includes'

const areSlotsSwappable = (firstSlot, lastSlot) => {

	console.log(firstSlot)
	console.log(lastSlot)

	if( includes(firstSlot.player.positions, lastSlot.position) && includes(lastSlot.player.positions, firstSlot.position) ){
		return true
	}
	else{
		return false
	}
}

export default areSlotsSwappable