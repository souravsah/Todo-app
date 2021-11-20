import React from 'react'
import navbar from './navbar.module.css'
import { AiFillSetting } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className={navbar.heading}>
        <div className={navbar.container}>
        <div >
                <h2>Todo-App</h2>
                <h2><AiFillSetting/></h2>
            </div>

        </div>
        </div>
    )
}

export default Navbar
