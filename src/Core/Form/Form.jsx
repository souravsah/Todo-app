import React, { useRef } from 'react'
import formcss from './form.module.css'
const Form = ({name,handleChange,handleSubmit,data}) => {
    let input = useRef(null)
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
        <input autoComplete="off"
               type="text" 
               placeholder="Enter your name"  
               name="name" 
               onChange={handleChange} 
               value={data.name}
               ref={input}
               />
        </div>
        <div className={formcss['form-content']}>
        <input autoComplete="off" type="number" id="" placeholder="Enter amount" name="amount" onChange={handleChange} value={data.amount}/>
        </div>
        <div className={
            formcss['form-content']
        }>
            <input autoComplete="off" type="date" name="date" id="" onChange={handleChange} value={data.date}/>
        </div>
        <div className={
            formcss['form-content']
        }>
            <textarea name="" id="" name="text" rows="5" onChange={handleChange} value={data.text}></textarea>
        </div>
        <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form
