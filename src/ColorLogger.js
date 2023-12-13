import React, { useState, useEffect } from 'react';

function ColorLogger() {
    const [color, setColor] = useState('black');

    useEffect(() => {
        console.log(`color changed to: ${color}`);
    }, [color]);

    const colorChange = (newColor) => {
        setColor(newColor);
    }

    return (
        <div>
          <h2 style={{ color: color }}>Color</h2>
          
          <button onClick={() => colorChange('red')}>Set Red</button>
          <button onClick={() => colorChange('blue')}>Set Blue</button>
          <button onClick={() => colorChange('green')}>Set Green</button>
        </div>
      );
}

export default ColorLogger;