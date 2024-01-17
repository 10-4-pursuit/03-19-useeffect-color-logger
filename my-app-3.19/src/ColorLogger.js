import React, {useState, useEffect} from 'react';

function ColorLogger(){

const randColors=['orange', 'black', 'pink']

const [color, setColor] = useState('red');
const [newColor, setNewColor] = useState('')

useEffect(() => {
    console.log('Color changed to', color);
}, [color]);

const changeColor = (event) => {
    setNewColor(event.target.value);
};
//come up with a random index
const updateColor = () => {
    const colorIndex = randColors.indexOf(color)+1
    setColor(randColors[colorIndex%randColors.length]);
}

return <div>
<h1>{`The color is currently ${color}`}</h1>
<input type='text' value={color} onChange={changeColor} />
<button onClick={updateColor}>Update Color</button>
</div>

}

export default ColorLogger;