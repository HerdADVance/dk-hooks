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
                selected: false,
                locked: false
            },
            {
                position: 'RB',
                player: null,
                id: 1,
                selected: false,
                locked: false
            },
            {
                position: 'RB',
                player: null,
                id: 2,
                selected: false,
                locked: false
            },
            {
                position: 'WR',
                player: null,
                id: 3,
                selected: false,
                locked: false
            },
            {
                position: 'WR',
                player: null,
                id: 4,
                selected: false,
                locked: false
            },
            {
                position: 'WR',
                player: null,
                id: 5,
                selected: false,
                locked: false
            },
            {
                position: 'TE',
                player: null,
                id: 6,
                selected: false,
                locked: false
            },
            {
                position: 'FLEX',
                player: null,
                id: 7,
                selected: false,
                locked: false
            },
            {
                position: 'DST',
                player: null,
                id: 8,
                selected: false,
                locked: false
            }
        ]
        lineups.push(lineup)
    }

    return lineups
    
}

export default makeLineups