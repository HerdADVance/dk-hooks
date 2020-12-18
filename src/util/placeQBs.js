
import addPlayerToTempLineups from './addPlayerToTempLineups'

const placeQBs = (p, l) => {

    let lineupCount = 1

    // Looping through each player
    for(var i = 0; i < p.length; i++){

        let toAdd = []
        let numLineupsIn = p[i].exposure * 1.5
        
        for(var j = 0; j < numLineupsIn; j++){
            toAdd.push({lid: lineupCount, sid: 0})
            lineupCount ++
        }

        l = addPlayerToTempLineups(p[i].id, toAdd, l)

    }

    return l
}

export default placeQBs