import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router'
import { useContext } from 'react/cjs/react.development'
import { GlobalContext } from '../../Context/Expense/Expensecontext'
import Form from '../../Core/Form/Form'
const EditFormPage = () => {
    let {Editdata,addExpence} = useContext(GlobalContext)
    console.log(Editdata)

    let history = useHistory()
    let [data,setData]=useState({
        name:"" || Editdata.name,
        amount:"" || Editdata.amount,
        date:"" || Editdata.date,
        text:"" || Editdata.text,
        id:"" ||Editdata.id
    })
    // setData(Editdata)
    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        setData({
            name:"",
            amount:"",
            date:"",
        })
        addExpence(data)
        history.push("/")
        console.log(data)
    }
    return (
        <Fragment>
        <Form name={'Edit Todo'}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              data={data}
        />
        </Fragment>
    )
}

export default EditFormPage