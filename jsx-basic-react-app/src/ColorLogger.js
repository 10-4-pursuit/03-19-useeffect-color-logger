import { useEffect, useState } from 'react';

function ColorLogger() {
    const [color, setColor] = useState(null);

    useEffect(() => {
        const color = Math.floor(Math.random() * 16777215).toString(16);
        setColor(`#${color}`);
        console.log (`#${color}`);
    }, []);
    
     return (
         <div style={{ color: color }}>Color Logger
         <button onClick={() => setColor(null)}>Clear</button>  
         </div>
     )

}

export default ColorLogger