import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            location: '',
            dietary: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        type="text" 
                        value={this.state.firstName} 
                        name="firstName" 
                        placeholder="First Name" 
                        onChange={this.handleChange} 
                    />
                    <br />

                    <input 
                        type="text" 
                        value={this.state.lastName} 
                        name="lastName" 
                        placeholder="Last Name" 
                        onChange={this.handleChange} 
                    />
                    <br />

                    <input 
                        type="number" 
                        value={this.state.age} 
                        name="age" 
                        placeholder="Age" 
                        onChange={this.handleChange} 
                        />
                    <br />

                    <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                    </label>
                    <br />
                    <br />

                    {/* Create select box for location here */}
                    <label htmlFor="location">Choose a location:</label>
                    <select name="location" value={this.state.location} onChange={this.handleChange}>
                        <option value="Israel">Israel</option>
                        <option value="Russia">Russia</option>
                        <option value="Ukraine">Ukraine</option>
                    </select>
                    <br />
                    <br />

                    {/* Create check boxes for dietary restrictions here */}
                    <label htmlFor="dietary">Choose a dietary restrictions:</label>
                    <br />
                    <label>
                        <input 
                            type="checkbox"
                            name="dietary"
                            value="Chili"
                            checked={this.state.dietary === "Chili"}
                            onChange={this.handleChange}
                        />Chili
                    </label>
                    <br />
                    <label>
                        <input 
                            type="checkbox"
                            name="dietary"
                            value="Egg rolls"
                            checked={this.state.dietary === "Egg rolls"}
                            onChange={this.handleChange}
                        />Egg rolls
                    </label>
                    <br />
                    <br />             
                   
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions:
                    {this.state.dietary}
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </main>
        )
    }
}

export default App
