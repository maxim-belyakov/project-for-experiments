import React from 'react';
import './css/App.css';

import todosData from "./myJSON/todosData"
import TodoItem from "./TodoItem"

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: todosData,
          count: 0
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleEncrement = this.handleEncrement.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
        console.log(prevState.todos)
        console.log(updatedTodos)
        return {
            todos: updatedTodos
        }
    })
  }

  handleEncrement() {
    this.setState(prevState => { return { count: prevState.count + 1 } })
  }

  render() {
    const todoItems = this.state.todos.map(
      item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>
    )
    
    return (
      <div className="App">
        <div className="todo-list">
            {todoItems}
        </div>

        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleEncrement}>Change!</button>
        </div>
      </div>
    )    
  }
}

export default App