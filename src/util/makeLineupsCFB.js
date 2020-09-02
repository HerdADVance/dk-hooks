const makeLineups = (num) => {
    let lineups = []

    for(let i = 0; i < num; i++){
        let lineup = {}
        lineup.id = i + 1
        lineup.salary = 50000
        lineup.roster = [
            {
                position: 'QB',
                player: null,
                id: 0,
                selected: false
            },
            {
                position: 'RB',
                player: null,
                id: 1,
                selected: false
            },
            {
                position: 'RB',
                player: null,
                id: 2,
                selected: false
            },
            {
                position: 'WR',
                player: null,
                id: 3,
                selected: false
            },
            {
                position: 'WR',
                player: null,
                id: 4,
                selected: false
            },
            {
                position: 'WR',
                player: null,
                id: 5,
                selected: false
            },
            {
                position: 'FLEX',
                player: null,
                id: 6,
                selected: false
            },
            {
                position: 'S-FLEX',
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