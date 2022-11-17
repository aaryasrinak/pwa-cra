import React from 'react';
import logo from './logo.svg';
import './App.css';

const x = 10;
const testclick = (y) => {
  console.log('testclick', x, y);
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={testclick}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
