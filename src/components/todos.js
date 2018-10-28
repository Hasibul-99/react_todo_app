import React from 'react';

const Todos = ({todo, deleteTodo}) => {

    const todoList = todo.length ? (
        todo.map(todo =>  {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => deleteTodo(todo.id)}>{todo.title}</span>
                </div>
            )
        })
        ) : (<p className="center">not find anything</p>)
    
    
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}


export default Todos;