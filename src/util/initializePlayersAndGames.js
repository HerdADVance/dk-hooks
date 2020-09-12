import includes from 'lodash/includes'
import orderBy from 'lodash/orderBy'

const initializePlayers = (players) => {

	let formattedPlayers = {}
	let games = []
	let formattedGames = []

	players.forEach(function(player){

		let formattedPlayer = {}

		// Collect the player data we want
		formattedPlayer.id = player.ID.toString()
		formattedPlayer.name = player.Name
		formattedPlayer.position = player.Position
		formattedPlayer.positions= player['Roster Position'].split('/')
		formattedPlayer.team = player.TeamAbbrev
		formattedPlayer.salary = player.Salary
		formattedPlayer.gameInfo = player['Game Info']
		formattedPlayer.ppg = player.AvgPointsPerGame
		formattedPlayer.lineupsIn = []
		formattedPlayer.exposure = 0
		formattedPlayer.exposureMin = 0
		formattedPlayer.exposureMax = 0

		// Add player to players
		formattedPlayers[player.ID] = formattedPlayer

		// Add this player's game to the list if not already there
		if(!includes(games, player['Game Info'])) games.push(player['Game Info'])

	})

	// Format games the way we want
	games.forEach(function(game){
		let formattedGame = {}

		formattedGame.away = game.substr(0, game.indexOf('v')).slice(0, -1)

		let homeString = game.split('s').pop().substr(1).substr(0)
		formattedGame.home = homeString.substr(0, homeString.indexOf(' '))

		let dateArray = game.split(' ')
		formattedGame.date = dateArray.slice(Math.max(dateArray.length - 2, 1)).shift()

		formattedGames.push(formattedGame)
	})

	// Sort games by date
	formattedGames = orderBy(formattedGames, ['date'], ['asc'])


	return{
		players: formattedPlayers,
		games: formattedGames
	}

}

export default initializePlayers