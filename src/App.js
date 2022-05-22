import React from "react";
import "./App.css";
import { TodoInput } from "./todo/components/TodoInput/TodoInput";
import { TodoList } from "./todo/components/TodoList/TodoList";
import { TodoTitle } from "./todo/components/TodoTitle/TodoTitle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  createTodoObject = (text) => {
    const todo = {
      done: false,
      id: (Math.random() * 15.75).toFixed(2),
    };
    this.setState({
      todos: [{ ...todo, text }, ...this.state.todos],
    });
  }

  completeTodo = (id) => {
    const todoIndex = this.state.todos.findIndex((item) => item.id === id);
    const todo = this.state.todos;

    todo[todoIndex].done = !todo[todoIndex].done;

    this.setState({
      todos: [...this.state.todos],
    });
  }

  completeAllTodos = () => {
    const allDone = this.state.todos.every(item => item.done);
    const allNotDone = this.state.todos.every(item => !item.done);

    let completeTodos;

    const mapAllTodos = bool => {
      completeTodos = this.state.todos.map(item => {
        item.done = bool ? !item.done : true;
        return item;
      });
    }

    if (allDone || allNotDone) {
      mapAllTodos(true);
    } else {
      mapAllTodos(false);
    }
    this.setState({
    todos: completeTodos,
    });
  }
  

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((item) => item.id !== id);

    this.setState({
      todos: newTodos,
    });
  }

  render() {
    return (
      <div className="App container">
        <TodoTitle />
        <TodoInput
         create={this.createTodoObject}
        completeAll={this.completeAllTodos}
        />
        <TodoList
          complete={this.completeTodo}
          todos={this.state.todos}
          delete={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;
