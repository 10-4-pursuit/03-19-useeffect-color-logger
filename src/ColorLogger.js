import React, {useEffect} from 'react';

function ColorLogger () {
    const [color, setColor] = React.useState('green');
    React.useEffect(() => {
        console.log('Color changed to' + color);
    }, [color]);
    return (
        <input type="color" onChange={(e) => setColor(e.target.value)}/> 
    )
}

export default  ColorLogger;