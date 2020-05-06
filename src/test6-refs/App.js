import React from "react"
import "./App.css"

export default class App extends React.Component {
  componentDidMount() {
    this.textInput.focus();
  }

  render () {
    return (
        <div className="App">
            <CustomTextInput ref={input => this.textInput = input} />
        </div>
    )
  }
}


class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
    this.inputRef = React.createRef();
  }

  focus() {
    // Установка фокуса на поле текстового ввода (input) с явным использованием исходного API DOM
    this.inputRef.focus();
  }

  render() {
    console.log(this.props)
    // Использование обратного вызова `ref` для сохранения ссылки на поле текстового ввода (input)
    // как элемента DOM в this.textInput.
    return (
      <div>
        <input
          type="text"
          ref={input => this.inputRef = input} />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
        />
      </div>
    );
  }
}