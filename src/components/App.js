import React from 'react';
import data from '../data/data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      HELLO WORLD
      </header>

      <h1>{data[0].title}</h1>
      <p>{data[0].description}</p>      
    </div>
  );
}
export default App;
