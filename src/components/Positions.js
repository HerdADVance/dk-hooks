import React, { useState } from "react";

const Positions = ({ positions, handlePositionClick, clickedPosition }) => {

    //const [clickedPosition, setClickedPosition] = useState('ALL')

    // function handlePositionClickLocal(position){
    //     setClickedPosition(position)
    //     handlePositionClick(position)
    // }

    return(
        <div className="positions">
            <ul className="clickable">
                {
                positions?
                    positions.map((position) => (
                        <li 
                            key={position}
                            className={position === clickedPosition ? 'selected' : ''}
                            onClick={() => handlePositionClick(position) } 
                        >
                        {position}
                        </li>
                    ))
                :
                    ''
                }
            </ul>
        </div>

    )

}

export default Positions