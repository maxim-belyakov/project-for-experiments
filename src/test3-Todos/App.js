import React from 'react';
import './css/App.css';

import todosData from "./myJSON/todosData.js"
import TodoItem from "./TodoItem.js"

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: todosData,
          count: 0
      }
      this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    // this.setState(prevState => {
    //   return {
    //       count: prevState.count + 1
    //   }
    // })

    // console.log("I'm working!, count", this.state.count)
    
    // this.setState(prevState => {
    //   const updatedTodos = prevState.todos
    //   updatedTodos[id - 1].completed = !prevState.todos[id - 1].completed
    //   return { todos: updatedTodos }
    // })
    // console.log(id)
    // console.log(this.state.todos[id-1])


    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo
      })
      return {
          todos: updatedTodos
      }
    })
}

  render() {
    const todoItems = this.state.todos.map(
      item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>
    )
    
    return (
      <>
        <div className="todo-list">
            {todoItems}
        </div>

        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Change!</button>
        </div>
      </>
    )    
  }
}

export default App