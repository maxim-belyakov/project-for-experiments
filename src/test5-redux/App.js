import React from "react"
import "./App.css"

import {connect} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {    
    return (
        <div className="App">
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    )
}

export default connect(state => ({count: state}), {increment, decrement})(App)