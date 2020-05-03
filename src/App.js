import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {connect} from "react-redux"

function App(props) {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header> */}
      <h1>{props.bananas}</h1>
      <button>-</button>
      <button>+</button>
    </div>
  );
}

function mapStateToProps(globalState) {
  // return an object where the keys are the name of the prop your component wants,
  // values are the actual parts of the global state your component wants
  return {
      bananas: globalState
  }
}

export default connect(mapStateToProps, {})(App)
