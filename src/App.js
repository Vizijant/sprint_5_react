import React from "react";
import "./App.css";
import { TodoInput } from "./todo/components/TodoInput/TodoInput";
import { TodoList } from "./todo/components/TodoList/TodoList";
import { TodoTitle } from "./todo/components/TodoTitle/TodoTitle";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {todos: []};
    
}

createTodoObject = (text) => {
const todo = {
  done:false,
  id: (Math.random()*15.75).toFixed(2),
}
this.setState({
todos: [{ ...todo, text}, ...this.state.todos]
});
}

  render() {
    return (
      <div className="App container">
        <TodoTitle />
        <TodoInput create= {this.createTodoObject}/>
        <TodoList todos = {this.state.todos} />
      </div>
    );
  }
}

export default App;
