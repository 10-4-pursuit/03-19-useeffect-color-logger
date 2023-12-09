import { useState, useEffect } from 'react'
// ColoerLogger function component
const ColorLogger = (props) => {
// useState hook to set the color
    const [color, setColor] = useState('')
// useEffect hook to set the color
    useEffect(() => {
        // set the color to props.color
        setColor(props.color)
        
    }, [props.color]) // only re-run the effect if props.color changes

    // return the color
    return (
        <div>
            <h1>Color Logger</h1>
            <h2>This is the color: {color}</h2>
            <button className='blue' onClick={() => setColor('blue')}>Blue</button>
            <button className='red' onClick={() => setColor('red')}>Red</button>
            <button className='green' onClick={() => setColor('green')}>Green</button>
            <button className='yellow' onClick={() => setColor('yellow')}>Yellow</button>
            <button className='purple' onClick={() => setColor('purple')}>Purple</button>
            <button className='orange' onClick={() => setColor('orange')}>Orange</button>
            <button className='pink' onClick={() => setColor('pink')}>Pink</button>
        </div>
    )
    
}

export default ColorLogger