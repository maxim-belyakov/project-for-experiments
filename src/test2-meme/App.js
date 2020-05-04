import React from 'react';
import './css/App.css';
import './css/meme.css';
import Header from './components/meme/Header.js';
import MemeGenerator from './components/meme/MemeGenerator.js';

function App(props) {
  return (
    <div className="App">
      <Header />
      <MemeGenerator className="memeGenerator" />
    </div>
  );
}

export default App