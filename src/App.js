import React from "react";
import "./App.css";
import { TodoInput } from "./todo/components/TodoInput/TodoInput";
import { TodoTitle } from "./todo/components/TodoTitle/TodoTitle";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {todos: []}
}

createTodoObject = (text) => {
const todo = {
  done:false,
  id: new Date().toLocaleString(),
}
this.setState({
todo: [{ ...todo, text}, ...this.state.todos]
});
}

  render() {
    return (
      <div className="App container">
        <TodoTitle />
        <TodoInput />
      </div>
    );
  }
}

export default App;
