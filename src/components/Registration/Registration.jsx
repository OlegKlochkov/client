import { useState } from "react"
import { registration } from "../../actions/user";
import { NavLink } from "react-router-dom";
import Input from "../Input"
import './registr.css'

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [second_name, setSecondName] = useState('');
    return (
        <div className='registr'>
            <div className='textReg'>Регистрация</div>
            <Input value={name} setValue={setName} type="text" placeholder="Введите имя" />
            <Input value={second_name} setValue={setSecondName} type="text" placeholder="Введите фамилию" />
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..." />
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль" />
            <div className="divButtonsRegistration">
                <button className="RegistrationButton1" onClick={() => registration(email, password, name, second_name)}>Зарегестрироваться</button>
                <button className="RegistrationButton2"><NavLink to="/login">Войти</NavLink></button>
            </div>
        </div>
    )
}
export default Registration