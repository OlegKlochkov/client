import React from 'react'
import './css/navbar.css'
import Logo from './img/navbar-logo.svg'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../reducers/userReducers';


const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} className="nacbar logo" />
                <div className="navbar header">Client side</div>
                {!isAuth && <div className="navbar login"><NavLink to="/login">Войти</NavLink></div>}
                {!isAuth && <div className="navbar registration"><NavLink to="/registration">Регистрация</NavLink></div>}
                {isAuth && <div className="navbar login" onClick={()=>dispatch(logout())}>Выйти</div>}
            </div>
        </div>
    )
}
export default Navbar