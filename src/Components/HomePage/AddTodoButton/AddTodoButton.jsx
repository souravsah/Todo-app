import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../../../Context/Expense/Expensecontext'
import todobutton from "./AddTodoButton.module.css"
const AddTodoButton = () => {
    let {todo} = useContext(GlobalContext)
    let history = useHistory();
    const handleTodo = () =>{
        history.push("/addTodo")
    }
    return (
        <div className={todobutton.todobutton}>
        <div className={todobutton.container}>
        <button onClick={handleTodo}>AddTodo</button>
        <h1>Showing {todo.length} Todos totaling ${todo.reduce((acc,curr)=>{
            return acc +=Number(curr.amount);
          },0)}</h1>

        </div>
        </div>
    )
}

export default AddTodoButton
