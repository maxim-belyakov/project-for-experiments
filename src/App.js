import React, {Component} from "react"
// import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000)
    }
    
    render() {
        let button;

        if (this.state.isLoading) {
            button = <div>loading</div>
        } else {
            button = <div>working</div>
        }

        return (
            <div>
                {button}
                {/* <Conditional isLoading={this.state.isLoading}/> */}
            </div>
        )
    }
}

export default App
