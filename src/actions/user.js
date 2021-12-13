import axios from 'axios'
import { get_products_reducer, get_product_reducer, setUser} from '../reducers/userReducers'
export const registration = async (email, password, name, second_name) => {
    try {
        const response = await axios.post('http://localhost:5000/registration?content-type=application/json; charset=utf-8', {
            email,
            password,
            name,
            second_name
        })
        console.log(response.data)
    } catch (e) {
        console.log(e)
    }
}

export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/login?content-type=application/json; charset=utf-8', {
                email,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:5000/auth?content-type=application/json; charset=utf-8',
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (e) {
            console.log(e)
            localStorage.removeItem('token')
        }
    }
}

export const get_products = () => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/get_products?content-type=application/json; charset=utf-8', {
                
            })
            dispatch(get_products_reducer(response.data.products))
        } catch (e) {
            console.log(e)
        }
    }
}

export const get_product = (product_id) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/get_product?content-type=application/json; charset=utf-8', {
                product_id
            })
            dispatch(get_product_reducer(response.data.product))
        } catch (e) {
            console.log(e)
        }
    }
}