import logo from './logo.svg';
import './App.css';
import TodoItem from './component/TodoItem';
import todoData from "./todoData";
import React from 'react';

class App extends React.Component {
constructor() {
  super()
  this.state = {
    todoData: todoData
  }
  this.handleChange = this.handleChange.bind(this);
}

handleChange(id) {
  this.setState((prevState) => {
    const updatedTodos = prevState.todoData.map(todo =>{
      if(todo.id === id) {
return {
  ...todo,
  completed: !todo.completed
}
      }
      return todo
    })
    
    return {
      todoData: updatedTodos
    }
  })
}
  
  render() {
    const todoItems = this.state.todoData.map(todo => {
      return (
        <TodoItem key={todo.id} text={todo.text} completed={todo.completed} id={todo.id} handleChange={this.handleChange} />
      )
    })
    return (
      <div className="todo-list">
        {todoItems}
      </div>
    );
  }
  
}

export default App;
