import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../Context/Expense/Expensecontext';
import searchbynamecss from "./searchbyname.module.css"
const SearchbyName = () => {
    let [data,setData]=useState("");
    let {filterData} = useContext(GlobalContext)
    const handleChange = (e) =>{
        setData(e.target.value)
        // console.log(data)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        filterData(data)
    }
    return (
        <form className={searchbynamecss.Searchbynamecss} onSubmit={handleSubmit}>
            <input type="text" placeholder="Search Todo" onKeyPress={handleChange}/>
        </form>
    )
}

export default SearchbyName
