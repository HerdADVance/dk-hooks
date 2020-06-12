import React from 'react';

const Games = ({ games, handleTeamClick, clickedTeam }) => {

    return(
        
        <div className="games">

            {games.length > 0 ?

                games.map((game) => (
                    <div className="game" key={game.home}>
                        <span 
                            key={game.home}
                            className={game.home === clickedTeam ? 'selected' : ''}
                            onClick={() => handleTeamClick(game.home)} 
                        >
                        {game.home}
                        </span>

                        <span 
                            key={game.away}
                            className={game.away === clickedTeam ? 'selected' : ''}
                            onClick={() => handleTeamClick(game.away)} 
                        >
                        {game.away}
                        </span>

                    </div>
                ))

            : 
                <p>Loading games</p>
            }

            <div className="game">
                <span
                    className={'ALL' === clickedTeam ? 'selected' : ''}
                    onClick={() => handleTeamClick('ALL')}
                >
                ALL
                </span>
            </div>

            

        </div>

    )

}

export default Games


