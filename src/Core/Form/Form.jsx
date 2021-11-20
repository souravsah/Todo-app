import React from 'react'
import formcss from './form.module.css'
const Form = ({name,handleChange,handleSubmit,data}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div className={
            formcss['form-content']
        }>
           <h3>{name}</h3> 
        </div>
        <div className={
            formcss['form-content']
        }>
        <input type="text" placeholder="Enter your name"  name="name" onChange={handleChange} value={data.name}/>
        </div>
        <div className={formcss['form-content']}>
        <input type="number" id="" placeholder="Enter amount" name="amount" onChange={handleChange} value={data.amount}/>
        </div>
        <div className={
            formcss['form-content']
        }>
            <input type="date" name="date" id="" onChange={handleChange} value={data.date}/>
        </div>
        <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form
