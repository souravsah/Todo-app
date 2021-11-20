import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router'
import Form from '../../Core/Form/Form'
const EditFormPage = () => {
    let history = useHistory()
    let [data,setData]=useState({
        name:"",
        amount:"",
        date:"",
    })
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