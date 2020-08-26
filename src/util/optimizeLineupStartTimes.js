import findPlayerPositions from './findPlayerPositions'

const optimizeLineupStartTimes = (l, p) => {

    for(var i = 0; i < l.length; i++){

        let rosterPlayers = []
        let positions = []
        let dates = []

        for(var j = 0; j < l[i].roster.length; j++){
            let rosterPlayer = p[l[i].roster[j].player]
            rosterPlayers.push(rosterPlayer)
            positions.push(rosterPlayer.positions)
            //08/09/2020 05:00PM ET
            dates.push(new Date('08/09/2020 12:30'))
        }

        console.log(rosterPlayers)
        console.log(positions)
        console.log(dates)

        dates.sort(function compare(a, b) {
            return a - b
        });

        console.log(dates)

        if (i === 0) break

    }
    
}

export default optimizeLineupStartTimes