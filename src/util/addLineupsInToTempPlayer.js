const addLineupsInToTempPlayer = (pid, toAdd) => {

	// Make it affect player like this but not set state, return players. This isn't done but not being used
	let result = {...players}
    toAdd.forEach(function(slot){
        result[pid].lineupsIn.push(slot.lid)
    })
    setPlayers(result)

    toAdd.forEach(function(slot){
        const lineupIndex = findLineupIndex(lineups, slot.lid)
        lineups[lineupIndex].roster[slot.sid].player = pid
    })
    return lineups
}

export default addLineupsInToTempPlayer