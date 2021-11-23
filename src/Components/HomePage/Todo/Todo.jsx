import React, { useContext } from 'react'
import { AiFillDelete,AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from '../../../Context/Expense/Expensecontext'
import Todoscss from "./todo.module.css"
import { useHistory } from 'react-router';
const Todo = ({item}) => {
    let {editData} =useContext(GlobalContext)
    let history = useHistory()
    let {deleteExpence} = useContext(GlobalContext)
    const handleDelete = (id) =>{
        deleteExpence(id)
    }
    const handleEdit = (edit)=>{
        edit.Edit=true
        console.log(edit)
        editData(edit)
        history.push("/editform")
    }
    return (
        <div className={Todoscss.todo}>
            <div className="title">
                <h3>{item.name}</h3>
                <h5>{item.date}</h5>
            </div>
            <div className={Todoscss.details}>
                <h3>$ {item.amount}</h3>
                <h3> 
                <span onClick={()=>{handleDelete(item.id)}} ><AiFillDelete/></span>
                <span onClick={()=>{handleEdit(item)}}><AiFillEdit/></span> 
                </h3>
            </div>
        </div>
    )
}

export default Todo
