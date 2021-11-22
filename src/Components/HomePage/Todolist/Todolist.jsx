import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../Context/Expense/Expensecontext'
import Todo from '../Todo/Todo'
import todolist from "./todolist.module.css"
const Todolist = () => {
    let {todo} = useContext(GlobalContext)
    return (
        <div className={todolist.Todolist}>
                  {!todo.length ? (
        <h1>Sorry, No Todos</h1>
      ) : (
        todo.map((item, idx) => <Todo item={item} idx={idx} />)
      )}

        </div>
    )
}

export default Todolist
