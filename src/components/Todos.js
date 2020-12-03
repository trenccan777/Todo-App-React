import React from 'react'
import {todos} from '../data/todos'
import Todo from './Todo';
export default class Todos extends React.Component {

    constructor() {
        super();
        this.state = {todos};
    }

    render() {
        
        let renderTodos = todos.map((todo) => {
            return <Todo data = {todo} key={todo.id} />;
        })

        return <ul>{renderTodos}</ul>;
    }}