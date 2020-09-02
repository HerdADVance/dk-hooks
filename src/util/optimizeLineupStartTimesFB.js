import orderBy from 'lodash/orderBy'
import findPlayerPositions from './findPlayerPositions'

const optimizeLineupStartTimes = (l, p) => {

    // Looping through each lineup
    for(var i = 0; i < l.length; i++){

        // Replacing pid in roster.player with full player info
        for(var j = 0; j < l[i].roster.length; j++){
            l[i].roster[j].player = p[l[i].roster[j].player]
        }

        // Creating a separate list ordered by date
        let rosterByDate = orderBy(l[i].roster, 'player.date', ['desc'])

        // Looping through list to add order property to actual roster
        let count = -1
        let lastDate = new Date('1-1-1970')

        for(var j = 0; j < rosterByDate.length; j++){
        
            let sid = rosterByDate[j].id
            let date = l[i].roster[sid].player.date

            if(lastDate.getTime() !== date.getTime() || j == 0){
                count ++
            }

            l[i].roster[sid].player.dateOrder = count

            lastDate = date
        }

        let flexPosition = l[i].roster[7].player.position
        let slotsToCompare = [l[i].roster[7].player]
        switch(flexPosition){
            case 'RB':
                slotsToCompare.push(
                    l[i].roster[1].player,
                    l[i].roster[2].player
                )
                break
            case 'WR':
                slotsToCompare.push(
                    l[i].roster[3].player,
                    l[i].roster[4].player,
                    l[i].roster[5].player,
                )
                break
            case 'TE':
                slotsToCompare.push(
                    l[i].roster[6].player
                )
                break
            default: console.log('error')
        }

        slotsToCompare = orderBy(slotsToCompare, 'dateOrder', ['asc'])
        console.log(slotsToCompare)

        //slotsToCompare[0] needs to go in flex


    }
    
}

export default optimizeLineupStartTimes