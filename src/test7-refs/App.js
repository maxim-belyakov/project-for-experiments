import React from "react"
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <h2>Here I use ref.current and ref.current.state from another component</h2>
      <Parent />
    </div>
  );
}

class Parent extends React.Component {
  pageLevelEditorRef = React.createRef();
  getState = () => {
    console.log(this.pageLevelEditorRef.current);
    console.log(this.pageLevelEditorRef.current.state);
  };
  render() {
    return (
      <div>
        <Test ref={this.pageLevelEditorRef} />
        <p />
        <button onClick={this.getState}> get ref info</button>
      </div>
    );
  }
}

class Test extends React.Component {
  state = {
    something: false
  };
  render = () => (
    <button
      onClick={() => this.setState({ something: !this.state.something })}
      style={{ fontSize: "30px" }}
    >
      <span>{String(this.state.something)}</span>
    </button>
  );
}