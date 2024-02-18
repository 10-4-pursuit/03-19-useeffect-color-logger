import React, {useState, useEffect} from 'react';

function ColorLogger() {
    const[color, setColor] = useState('');

    useEffect(() => {
        console.log(`Color changed to: ${color}`);

    }, [color]);

    const handleColorChange = (newColor) => {
        setColor(newColor);
    };

    return (
        <div>
            <label>
                Select Color:
                <input
                    type="color"
                    value={color}
                    onChange={(e) => handleColorChange(e.target.value)}/>
            </label>
            <p style={{ color: color }}>This text is in the selected color</p>
        </div>
    );
}

export default ColorLogger;