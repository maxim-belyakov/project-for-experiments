import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

export function increment() {
    return (dispatch, getState) => {
        const currentCount = getState() // because our state is just a zero right now
        if (currentCount % 2 === 0 ) {
            dispatch({ type: "INCREMENT" })
        } else {
            setTimeout(() => {
                dispatch({type: "INCREMENT"})
            }, 1500)
        }
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

function reducer(count = 0, action) {
    switch(action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        default:
            return count
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store