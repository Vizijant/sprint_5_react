import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";
export class TodoList extends React.Component {
    render() {
        const todoItems = this.props.todos.map(item => {
            return <TodoItem
             key={item.id}
             todo = {item}
             />
        });
        return(
            <ul className='list-group'>
                {todoItems}
            </ul>
        );
    }
}