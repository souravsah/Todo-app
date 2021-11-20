import React from 'react'
import AddTodoButton from '../../Components/HomePage/AddTodoButton/AddTodoButton'
import Todo from '../../Components/HomePage/Todo/Todo'
import Todolist from '../../Components/HomePage/Todolist/Todolist'

const HomePage = () => {
    return (
        <div>
            <AddTodoButton/>
            <Todolist/>
        </div>
    )
}

export default HomePage
