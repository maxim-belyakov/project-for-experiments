import React from "react"
import "./App.css"

import {useSelector} from "react-redux"
import {increment, decrement} from "./redux"

function App(props) {
    const count = useSelector(state => state)
    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    )
}

// export default connect(state => ({count: state}), {increment, decrement})(App)

export default App