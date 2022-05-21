import React from "react";

export class TodoItem extends React.Component {
    render () {
        return (
    <li className='list-group-item d-flex justify-content-between align-items-center' id ={this.props.todo.id}>
        <input type='checkbox' />
        <span>{this.props.todo.text}</span>
        <button>&times;</button>
    </li>
        );
    }
}