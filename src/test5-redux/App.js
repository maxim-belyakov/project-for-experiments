import React from "react"
import "./App.css"

import {connect} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {    
    return (
        <div className="App">
            <h1>{props.count}</h1>
            <button onClick={props.oranges}>-</button>
            <button onClick={props.apples}>+</button>
        </div>
    )
}

// Write the mapStateToProps function from scratch
// Takes the global state from Redux as a parameter
// returns an object where the keys are the name of the prop your component wants,
// and the values are the actual parts of the global state your component wants

function mapStateToProps(state) {
    return {
        count: state
    }
}

const mapDispatchToProps = {
    apples: increment,
    oranges: decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(App)