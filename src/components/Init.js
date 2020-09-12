import React, { useState } from 'react';

const Init = ({ handleInitClick }) => {

    const [numberLineups, setNumberLineups] = useState(100)

    function handleInputChange(event){
        setNumberLineups(event.target.value);
    }

    return(

        <div className="init-wrap overlay">
            <p>How many lineups do you want to make?</p>
            <input
                type="text"
                onChange={handleInputChange}
            />
            <div className="init-buttons">
                <button onClick={() => handleInitClick(numberLineups)}>Get Started</button>
            </div>
        </div>

    )
}

export default Init