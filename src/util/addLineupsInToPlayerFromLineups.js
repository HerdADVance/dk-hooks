const addLineupsInToPlayerFromLineups = (p, l) => {

	for(var i = 0; i < l.length; i++){
        for (var j = 0; j < l[i].roster.length ; j++){
            let pid = l[i].roster[j].player.pid
            p[pid].lineupsIn.push(l[i].id)
        }
    }

    return p
}

export default addLineupsInToPlayerFromLineups