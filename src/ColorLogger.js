import React, {useState, useEffect} from 'react'

function ColorLogger() {
    const colors= ['green', 'blue', 'orange', 'red', 'pink', 'yellow', 'black','purple']
    const [colorIndex, setColorIndex] = useState(0)
    useEffect(() => {
        console.log(`Color has changed to ${colors[colorIndex]}`)
    }, [colorIndex])

    const colorSwitch = () => {
        setColorIndex((prevIndex) => (prevIndex +1) % colors.length)
    }
  return (
    <div>
        <button onClick={colorSwitch}>Color Switch</button>
        <h1 style={{color:colors[colorIndex]}}>Color has changed to {colors[colorIndex]}</h1>
    </div>
  )
}

export default ColorLogger