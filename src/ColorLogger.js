// Import the necessary modules from the React and react-color libraries
import React from "react";
import { SketchPicker } from "react-color";

// Define the ColorLogger functional component
function ColorLogger() {
    // Define state variables using the useState hook
    const [color, setColor] = React.useState("red");
    const [showColorPicker, setShowColorPicker] = React.useState(false);

    // Define a function to handle color changes in the color picker
    const handleChangeComplete = (newColor) => {
        // Update the color state with the selected color
        setColor(newColor.hex);
    };

    // Use the useEffect hook to log a message when the color state changes
    React.useEffect(() => {
        console.log('Color changed to', color);
    }, [color]);

    // Return JSX to render the ColorLogger component
    return (
        <div>
            {/* Display a heading for the Color Logger */}
            <h1>Color Logger</h1>

            {/* Display a colored div that can be clicked to show/hide the color picker */}
            <div
                style={{ backgroundColor: color, padding: '20px', cursor: 'pointer' }}
                onClick={() => setShowColorPicker((prev) => !prev)}
            >

                {/* Display a message inside the colored div, indicating the color */}
                <h2>Hello, I am a {color} div!</h2>
            </div>
            <br/>

            {/* Display the color picker component if showColorPicker state is true */}
            {showColorPicker && (
                <SketchPicker
                    color={color}
                    onChangeComplete={handleChangeComplete}
                />
            )}
        </div>
    );

};

// Export the ColorLogger component as the default export of this module
export default ColorLogger;