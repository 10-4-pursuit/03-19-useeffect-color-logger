import React, { useState, useEffect } from 'react';

function ColorLogger() {
    const [color, setColor] = useState('#000'); //initial color

    useEffect(() => {
            console.log('Color changed to: ', color);
    }, [color]); //run effect only when color changes

    function handleColorChange(newColor) {
        setColor(newColor);

    }

    return (
        <div>
            <button onClick={() => handleColorChange('#f00')}>Red</button>
            <button onClick={() => handleColorChange('#0f0')}>Green</button>
            <button onClick={() => handleColorChange('#00f')}>Blue</button>
        </div>
    );
};

export default ColorLogger;