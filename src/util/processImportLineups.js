const processImportLineups = (l, lData) => {
	
	// TODO: sort lineups by id & also before save

	let counter = 0

	for(var i = 0; i < l.length; i++){
		for(var j = 0; j < l[i].roster.length; j++){
			l[i].roster[j].player = lData[counter]
			counter ++
		}
	}

	return l
}

export default processImportLineups