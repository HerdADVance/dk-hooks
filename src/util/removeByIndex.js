const removeByIndex = (array, index) => {
	return array.filter(function(elem, _index){
          return index != _index;
    });
}

export default removeByIndex
