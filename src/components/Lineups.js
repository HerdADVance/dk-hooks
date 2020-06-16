import React from 'react';

import Lineup from './Lineup'

const Lineups = ({ lineups, referencePlayers, handleSlotClick }) => {

    return(

        <div className="lineups-wrap">
            {
            lineups?
                lineups.map((lineup, index) => (
                    <Lineup 
                        lineup={lineup}
                        referencePlayers={referencePlayers}
                        handleSlotClick={handleSlotClick}
                    />
                ))
            :
                <p>Loading lineups</p>
            }
        </div>

    )
}

export default Lineups