import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addTodo';

class First extends Component {
    state = {
        data: [
            {id: 1, title: "this is one"},
            {id: 2, title: "this is two"}
        ]
    }

    deleteTodo = (id) => {
        const todos = this.state.data.filter(todo => {
            return todo.id !== id
        });

        this.setState({
            data: todos
        })
    }

    addTodos = (todo) => {
        
        todo.id = Math.random();

        let todos = [...this.state.data, todo];

        this.setState({
            data: todos
        });
    }

  render() {
    return (
        <div className="todo-app container">
            <h1 className="center blue-text">Todo's</h1>
            <Todos todo = {this.state.data} deleteTodo = {this.deleteTodo} />

            <AddTodo addTodo = {this.addTodos}/>
        </div>
    );
  }
}

export default First;