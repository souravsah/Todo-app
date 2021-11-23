import React from 'react'
import navbar from './navbar.module.css'
import { AiFillSetting } from 'react-icons/ai';
import { useHistory } from 'react-router';

const Navbar = () => {
    let history = useHistory()
    const toSetting = () =>{
        history.push("/setting")
    }
    const toHomePage = () =>{
        history.push("/")
    }
    return (
        <div className={navbar.heading}>
        <div className={navbar.container}>
        <div >
                <h2 onClick={toHomePage}>Todo-App</h2>
                <h2 onClick={toSetting}><AiFillSetting/></h2>
            </div>

        </div>
        </div>
    )
}

export default Navbar
