import includes from 'lodash/includes'
import orderBy from 'lodash/orderBy'
import extractDateFromGameInfo from './extractDateFromGameInfo'
import findPlayerOpponent from './findPlayerOpponent'

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
		formattedPlayer.actualPositions = player['Position'].split('/') 
		formattedPlayer.positions = player['Roster Position'].split('/')
		formattedPlayer.salary = player.Salary
		formattedPlayer.team = player.TeamAbbrev
		formattedPlayer.opponent = findPlayerOpponent(player.TeamAbbrev, player['Game Info'])
		formattedPlayer.gameInfo = player['Game Info']
		formattedPlayer.date = extractDateFromGameInfo(player['Game Info'])
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

		formattedGame.home = game.substr(0, game.indexOf('@'))

		let awayString = game.split('@').pop()
		formattedGame.away = awayString.substr(0, awayString.indexOf(' '))

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