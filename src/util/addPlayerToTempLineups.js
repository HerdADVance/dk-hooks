import findLineupIndex from './findLineupIndex'

const addPlayerToTempLineups = (pid, toAdd, lineups) => {
    toAdd.forEach(function(slot){
        const lineupIndex = findLineupIndex(lineups, slot.lid)
        lineups[lineupIndex].roster[slot.sid].player = pid
    })
    return lineups
}

export default addPlayerToTempLineups