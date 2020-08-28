import orderBy from 'lodash/orderBy'
import findPlayerPositions from './findPlayerPositions'

const optimizeLineupStartTimes = (l, p) => {

    // Looping through each lineup
    for(var i = 0; i < l.length; i++){

        let emptyRoster = [null, null, null, null, null, null, null, null]

        // Replacing pid in roster.player with full player info
        for(var j = 0; j < l[i].roster.length; j++){
            l[i].roster[j].player = p[l[i].roster[j].player]
        }

        // Creating a separate list ordered by date
        let rosterByDate = orderBy(l[i].roster, 'player.date', ['desc'])

        // Looping through list to add order property to actual roster
        let groups = []
        let count = -1
        let lastDate = new Date('1-1-1970')

        for(var j = 0; j < rosterByDate.length; j++){
        
            let sid = rosterByDate[j].id
            let date = l[i].roster[sid].player.date

            if(lastDate.getTime() !== date.getTime() || j == 0){
                groups.push([sid])
                count ++
            } else groups[groups.length - 1].push(sid)

            l[i].roster[sid].player.orderGroup = count

            lastDate = date
        }

        console.log(groups)
        console.log(rosterByDate)

        
        // Check for double center
        // Put earliest in util, check to see if viable by:
            // See if any positions are missing
            // Start putting most restrictive into emptyRoster slots




        if (i === 0) break

    }
    
}

export default optimizeLineupStartTimes