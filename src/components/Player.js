import React from 'react';

const Player = ({ player, numLineups, handlePlayerClick }) => {

    return(
        
        <tr className="player" onClick={() => handlePlayerClick(player.id)}>
            <td className="position">{player.position}</td>
            <td className="name">{player.name}</td>
            <td className={`team ${player.team}`}>{player.team}</td>
            <td className="salary">${player.salary}</td>
            <td className="apps">{player.lineupsIn.length} ({Math.round(player.lineupsIn.length / numLineups * 100)}%)</td>
            <td className="exp">{player.exposure}%</td>
            <td className="ppg">{player.ppg}</td>
            <td className="gameinfo">{player.gameInfo}</td>
        </tr>

    )

}

export default Player


