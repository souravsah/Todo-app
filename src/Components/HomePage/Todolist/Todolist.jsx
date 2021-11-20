import React from 'react'
import Todo from '../Todo/Todo'
import todolist from "./todolist.module.css"
const Todolist = () => {
    return (
        <div className={todolist.Todolist}>
            <Todo/>
            <Todo/>
            <Todo/>

        </div>
    )
}

export default Todolist
