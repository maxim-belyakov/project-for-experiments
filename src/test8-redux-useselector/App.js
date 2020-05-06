import React from "react"
import "./App.css"

import {useSelector, useDispatch} from "react-redux"
import {increment, incrementSW, decrement} from "./redux"

function App(props) {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    return (
        <div className="App">
            <h1>{state.count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementSW())}>+</button>
        </div>
    )
}

// export default connect(state => ({count: state}), {increment, decrement})(App)

export default App