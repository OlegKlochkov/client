import { useState } from "react"
import { NavLink } from "react-router-dom";
import { login } from "../../actions/user";
import { useDispatch } from 'react-redux'
import Input from "../Input"
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch =useDispatch()
    return (
        <div className="auth">
            <div className='textAuth'>Авторизация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..." />
            <div className='divButtons'>
                <button className='butAuth1' onClick={() => dispatch(login(email, password))}>Войти</button>
                <button className='butAuth2'><NavLink to="/registration">Регистрация</NavLink></button>
            </div>
        </div>
    )
}
export default Login