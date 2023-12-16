import React, { useState, useEffect } from "react";

function ColorLogger() {
    const [color, setColor] = useState('red')

    useEffect(() =>{
        console.log('Color changed to: ' + color)
    },[color]);

    return (
        <div>
            <h1>Current Color: {color}</h1>
            <button onClick={() => setColor('blue')}> blue </button>
            <button onClick={() => setColor('green')}> green </button>
            <button onClick={() => setColor('red')}> red </button>
        </div>
    )

}

export default ColorLogger;