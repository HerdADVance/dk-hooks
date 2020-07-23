import findLineupIndex from './findLineupIndex'

const fillEmptySlots = (lineups, needed) => {

    console.log(needed)

    // Gather up which slots in the lineups are empty
    let emptySlots = []
    lineups.forEach(function(lineup){
        lineup.roster.forEach(function(slot){
            if(!slot.player){
                emptySlots.push({
                    lid: lineup.id,
                    sid: slot.id,
                    position: slot.position
                })
            }
        })
    })

    console.log(emptySlots)

    // for(var i = 0; i < needed.length; i++){
    //     for(var j = 0; j < needed[i].numShort.length; j++){
    //         for(var k = 0; k < emptySlots.length; k++){
    //             //let feasible = needed[i].player.positions.includes(emptySlots[k].position)
    //             let emptyPosition = emptySlots[k].position
    //             for(var l = 0; l < ){

    //             }

    //             // if this sl
    //         }
    //     }
    // }

    return lineups
}

export default fillEmptySlots