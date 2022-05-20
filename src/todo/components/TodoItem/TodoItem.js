import React from "react";

export class TodoItem extends React.Component {
    render () {
        return (
    <li>
        <input type='checkbox' />
        <span></span>
        <button>&items;</button>
    </li>
        );
    }
}