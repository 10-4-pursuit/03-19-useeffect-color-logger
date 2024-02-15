import React from 'react';
import './App.css';
import ColorLogger from './ColorLogger';
function App() {
  return (
    <div className="App">
      <ColorLogger color="red" />
      <ColorLogger color="pink" />
      <ColorLogger color="green" />
    </div>
  );
}

export default App;
