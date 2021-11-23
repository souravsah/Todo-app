import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../Context/Expense/Expensecontext'
import Todo from '../Todo/Todo'
import todolist from "./todolist.module.css"
const Todolist = () => {
    let {todo,filterdata} = useContext(GlobalContext)
    console.log(filterdata)
    return (
        <div className={todolist.Todolist}>
                  {!todo.length ? (
        <h1>Sorry, No Todos</h1>
      ) : (
        todo.filter((item)=>filterdata.length===0?true: item.name===filterdata).map((item, idx) => <Todo item={item} idx={idx} />)
      ) 
}

        </div>
    )
}

export default Todolist
