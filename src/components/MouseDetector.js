import React, {useState} from "react";

import "../styles/MouseDetector.css"

function MouseDetector(){
    const [coords, getCoords] = useState([0, 0])
    const setCoords = (x, y) => {
        getCoords([x, y])
    }

    return(
        <div
            className='cords'
            onMouseMove={(e) => {
                setCoords(e.clientX, e.clientY)
            }}
        >
            {`x: ${coords[0]}px, y: ${coords[1]}px`}
        </div>
    )
}

export default MouseDetector