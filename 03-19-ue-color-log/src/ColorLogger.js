import React, { useState, useEffect } from 'react';

function ColorLogger() {
    const [color, setColor] = useState('grey');

    useEffect(() => {
        document.title = color;
    }, [color]);

    return (
        <div>
            <h1 style={{ color: color }}>Hello World!</h1>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('red')}>Red</button>
            <button onClick={() => setColor('yellow')}>Yellow</button>
            <button onClick={() => setColor('green')}>Green</button>
            <button onClick={() => setColor('grey')}>Restart</button>
        </div>
    )
}

export default ColorLogger;

