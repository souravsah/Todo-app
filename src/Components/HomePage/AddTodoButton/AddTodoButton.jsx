import React from 'react'
import { useHistory } from 'react-router'
import todobutton from "./AddTodoButton.module.css"
const AddTodoButton = () => {
    let history = useHistory();
    const handleTodo = () =>{
        history.push("/addTodo")
    }
    return (
        <div className={todobutton.todobutton}>
        <div className={todobutton.container}>
        <button onClick={handleTodo}>AddTodo</button>

        </div>
        </div>
    )
}

export default AddTodoButton
