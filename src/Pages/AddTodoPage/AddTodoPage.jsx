import React, { Fragment, useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { GlobalContext } from '../../Context/Expense/Expensecontext'
import Form from '../../Core/Form/Form'
import { v4 as uuidv4 } from 'uuid';
const AddTodoPage = () => {
    let history = useHistory()
    let [data,setData]=useState({

    })
    let {addExpence,todo} = useContext(GlobalContext)
    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value,["id"]:uuidv4()})
    }
    console.log(todo)
    const handleSubmit = (e) =>{
        e.preventDefault()
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
