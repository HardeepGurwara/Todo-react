import React from 'react';
import './todo.css';

const Todo = (props) => {
    return (
        <div className="todo-container">
            <div className="todo bb dark-blue dim grow f2">
                {props.title}
                <button
                    className="deleteTodo shadow-5"
                    value={props.value}
                    onClick={props.deleteTodo}>Remove </button>
            </div>
        </div>
    )
}

export default Todo;