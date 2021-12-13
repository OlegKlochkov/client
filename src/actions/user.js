import axios from 'axios'
import { setUser } from '../reducers/userReducers'
export const registration = async (email, password, name) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration?content-type=application/json; charset=utf-8', {
            email,
            password,
            name
        })
        alert(response.data)
    } catch (e) {
        alert(e)
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login?content-type=application/json; charset=utf-8', {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (e) {
            alert(e)
        }
    }
}

export const auth = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:5000/api/auth/auth?content-type=application/json; charset=utf-8',
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (e) {
            alert(e)
            localStorage.removeItem('token')
        }
    }
}