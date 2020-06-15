const makeLineups = (num) => {
    let lineups = []

    for(let i = 0; i < num; i++){
        let lineup = {}
        lineup.id = i + 1
        lineup.salary = 50000
        lineup.roster = [
            {
                position: 'F',
                player: null,
                id: 0
            },
            {
                position: 'F',
                player: null,
                id: 1
            },
            {
                position: 'M',
                player: null,
                id: 2
            },
            {
                position: 'M',
                player: null,
                id: 3
            },
            {
                position: 'D',
                player: null,
                id: 4
            },
            {
                position: 'D',
                player: null,
                id: 5
            },
            {
                position: 'GK',
                player: null,
                id: 6
            },
            {
                position: 'UTIL',
                player: null,
                id: 7
            }
        ]
        lineups.push(lineup)
    }

    return lineups
    
}

export default makeLineups