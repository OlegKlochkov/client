import "./userProfilePage.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { get_client, update_client } from "../../actions/user"
import Input from "../Input"

const MainPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_client(function (e){setName(e.name); setSecondName(e.second_name); setThirdName(e.third_name ? e.third_name : 'не указано');
         setAddress(e.client_address ? e.client_address : 'не указан'); setPhone(e.phone_number ? e.phone_number : 'не указан')}))
    }, [])
    const client = useSelector(state => state.user.client)
    const [name, setName] = useState('');
    const [second_name, setSecondName] = useState('');
    const [third_name, setThirdName] = useState('');
    const [client_address, setAddress] = useState('');
    const [phone_number, setPhone] = useState('');
    return (
        <div className="profilePage">

            <div className="clientInfoDiv">
                <div className="clientInfo">Имя: {name}</div>
                <div className="changeClientInfo">
                <Input value={name} setValue={setName} type="text" placeholder="Введите имя" />
            </div>
            </div>


            <div className="clientInfoDiv">
                <div className="clientInfo">Фамилия:{second_name}</div>
                <div className="changeClientInfo">
                <Input value={second_name} setValue={setSecondName} type="text" placeholder="Введите фамилию" />
            </div>
            </div>


            <div className="clientInfoDiv">
                <div className="clientInfo">Отчество: {third_name}</div>
                <div className="changeClientInfo">
                <Input value={third_name} setValue={setThirdName} type="text" placeholder="Введите отчество" />
            </div>
            </div>


            <div className="clientInfoDiv">
                <div className="clientInfo">Почта: {client.email}</div>
            </div>

            <div className="clientInfoDiv">
                <div className="clientInfo">Адрес: {client_address}</div>
                <div className="changeClientInfo">
                <Input value={client_address} setValue={setAddress} type="text" placeholder="Введите адрес" />
            </div>
            </div>


            <div className="clientInfoDiv">
                <div className="clientInfo">Телефон: {phone_number}</div>
                <div className="changeClientInfo">
                <Input value={phone_number} setValue={setPhone} type="text" placeholder="Введите номер телефона" />
            </div>
            </div>
            <div className="profileButton" onClick={() => update_client(name, second_name, third_name, client_address, phone_number)}>Изменить</div>
        </div>
    )
}
export default MainPage