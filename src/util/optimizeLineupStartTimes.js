import findPlayerPositions from './findPlayerPositions'

const optimizeLineupStartTimes = (l, p) => {

    for(var i = 0; i < l.length; i++){

        let rosterPlayers = []

        for(var j = 0; j < l[i].roster.length; j++){
            let rosterPlayer = p[l[i].roster[j].player]
            rosterPlayers.push(rosterPlayer)
        }

        console.log(rosterPlayers)

        if (i === 0) break

    }
    
}

export default optimizeLineupStartTimes