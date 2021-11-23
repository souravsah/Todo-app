import React from 'react'
import AddTodoButton from '../../Components/HomePage/AddTodoButton/AddTodoButton'
import SearchbyName from '../../Components/HomePage/SearchbyName/SearchbyName'
import Todo from '../../Components/HomePage/Todo/Todo'
import Todolist from '../../Components/HomePage/Todolist/Todolist'

const HomePage = () => {
    return (
        <div>
            <AddTodoButton/>
            {/* <SearchTodo/> */}
            <span>
            <SearchbyName/>
            </span>
            <Todolist/>
        </div>
    )
}

export default HomePage
