import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router'
import Form from '../../Core/Form/Form'

const AddTodoPage = () => {
    let history = useHistory()
    let [data,setData]=useState({

    })
    const handleChange = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
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
