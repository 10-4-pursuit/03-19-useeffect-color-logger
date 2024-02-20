import React, { useState, useEffect } from 'react';

function ColorLogger({ color }) {
    const [colorValue, setColorValue] = useState(color);
    useEffect(() => {
        setColorValue(color);
    }, [color]);
    return (
        <div
            style={{
                color: colorValue
            }}
        >
            {colorValue}
        </div>
    );
}
export default ColorLogger;