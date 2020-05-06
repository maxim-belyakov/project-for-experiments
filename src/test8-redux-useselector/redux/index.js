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

export function incrementSW() {
    return (dispatch, getState) => {
        
        const number = getState().count
        const baseUrl = "https://swapi.dev/api/people"
        fetch(`${baseUrl}/${number}`)
            .then(res => res.json())
            .then(res => {
                dispatch({ 
                    type: "INCREMENT",
                    payload: res
                })
                console.log(res)
            })
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

const initialState = {
    count: 0,
    SWData: null
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + 1,
                SWData: action.payload
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1,
            }
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log(store.getState()))
export default store