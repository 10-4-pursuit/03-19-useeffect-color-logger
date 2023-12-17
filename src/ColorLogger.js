import React, { useState, useEffect } from "react";

function ColorLogger() {
  const [color, setColor] = useState("blue");
  useEffect(() => {
    console.log("You changed color to", color);
  }, [color]);

  const changeColor = () => {
    setColor((prevColor) => (prevColor === "blue" ? "pink" : "blue"));
  };

  return (
    <div>
      <h2 style={{ color }}>Color: {color}</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default ColorLogger;
