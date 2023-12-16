import React, { Component } from "react";
import { useEffect, useState } from "react";


function ColorLogger() {
  const [colors, setColors] = React.useState("orange");

  const bgColors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow'];

  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex]
  };

 const changeColor = 
    <button onClick={() => setColors(randomColor())}>change color</button>

  React.useEffect(() => {
    console.log(colors);
  });
  return (
   <div>
      <h1 style={{ backgroundColor: colors }}>
        this background color is {colors}
      </h1>
      {changeColor}
      </div>
   
  )
}

export default ColorLogger;
