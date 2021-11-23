import React, { Fragment, useContext, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../../Context/Expense/Expensecontext'
import Form from '../../Core/Form/Form'
import { v4 as uuidv4 } from 'uuid';
const AddTodoPage = () => {
    let history = useHistory()
    let {editData} =useContext(GlobalContext)
    let [data,setData]=useState({
        name:"" ,
        amount:"" ,
        date:"" ,
        text:"",
        id:"" 
    })
    let {addExpence,todo} = useContext(GlobalContext)
    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value,["id"]:uuidv4(),["Edit"]:false})
    }
    console.log(todo)
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(data.name=="" || data.amount=="" || data.date=="" || data.text==""  )
        {
            return;
        }
        addExpence(data)

        history.push("/")
        console.log(data)
    }
    return (
        <Fragment>
            <Form name={'ADD TODO'} handleChange={handleChange}
                handleSubmit={handleSubmit}
                data={data}
            />
        </Fragment>
    )
}

export default AddTodoPage
