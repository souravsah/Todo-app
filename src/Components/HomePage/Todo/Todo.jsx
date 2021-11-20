import React from 'react'
import todo from "./todo.module.css"
const Todo = () => {
    return (
        <div className={todo.todo}>
            <div className="title">
                <h3>Todo 1</h3>
            </div>
            <div className="details">
                <h3>$1010</h3>
            </div>
        </div>
    )
}

export default Todo
