const processImportData = (data) => {
	
	data = data.split('|')
	let lineupsData = data[0]
	let exposuresData = data[1]

	lineupsData = lineupsData.split(',')
	for(var i = 0; i < lineupsData.length; i++){
		if(lineupsData[i] == 'null') lineupsData[i] = null
			else lineupsData[i] = parseInt(lineupsData[i])
	}

	exposuresData = exposuresData.split(',')
	for(var i = 0; i < exposuresData.length; i++){
		exposuresData[i] = parseInt(exposuresData[i])
	}

	return {lineupsData, exposuresData}
}

export default processImportData