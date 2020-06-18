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
                id: 0,
                selected: false
            },
            {
                position: 'F',
                player: null,
                id: 1,
                selected: false
            },
            {
                position: 'M',
                player: null,
                id: 2,
                selected: false
            },
            {
                position: 'M',
                player: null,
                id: 3,
                selected: false
            },
            {
                position: 'D',
                player: null,
                id: 4,
                selected: false
            },
            {
                position: 'D',
                player: null,
                id: 5,
                selected: false
            },
            {
                position: 'GK',
                player: null,
                id: 6,
                selected: false
            },
            {
                position: 'UTIL',
                player: null,
                id: 7,
                selected: false
            }
        ]
        lineups.push(lineup)
    }

    return lineups
    
}

export default makeLineups