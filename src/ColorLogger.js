import { useState, useEffect } from "react";

function ColorLogger(props) {
    const [color, setColor] = useState("red");

    useEffect(() => {
        setColor(props.color);
        
    }, [props.color]);

    return (
        
        <div>
            <p>The color is {color}</p>
            <button onClick={() => setColor("blue")}>Change Color</button>
        </div>
    )

}

export default ColorLogger