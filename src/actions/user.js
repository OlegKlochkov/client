import axios from 'axios'
import { get_categories_reducer, get_category_products_reducer, get_client_reducer, get_products_in_shop_reducer, get_products_reducer, get_product_categories_reducer, get_product_reducer, get_reviews_reducer, get_shops_reducer, setUser} from '../reducers/userReducers'
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

export const get_reviews = (product_id) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/get_reviews?content-type=application/json; charset=utf-8', {
                product_id
            })
            dispatch(get_reviews_reducer(response.data.reviews))
        } catch (e) {
            console.log(e)
        }
    }
}

export const add_review = async (client_id, product_id, message, rating) => {
    try {
        const response = await axios.post('http://localhost:5000/add_review?content-type=application/json; charset=utf-8', {
            client_id,
            product_id,
            message,
            rating
        })
        alert(response.data)
    } catch (e) {
        console.log(e)
    }
}

export const get_categories = () => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/get_categories?content-type=application/json; charset=utf-8', {

            })
            dispatch(get_categories_reducer(response.data.categories))
        } catch (e) {
            console.log(e)
        }
    }
}

export const get_product_categories = (product_id) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/get_product_categories?content-type=application/json; charset=utf-8', {
                product_id
            })
            dispatch(get_product_categories_reducer(response.data.product_categories))
        } catch (e) {
            console.log(e)
        }
    }
}

export const get_category_products = (category_name) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/get_category_products?content-type=application/json; charset=utf-8', {
                category_name
            })
            dispatch(get_category_products_reducer(response.data.category_products))
        } catch (e) {
            console.log(e)
        }
    }
}

export const get_client = (_callback) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/get_client?content-type=application/json; charset=utf-8', {
                token: localStorage.getItem('token')
            })
            dispatch(get_client_reducer(response.data.client))
            _callback(response.data.client)
        } catch (e) {
            console.log(e)
        }
    }
}

export const update_client = async (name, second_name, third_name, client_address, phone_number) => {
    try {
        await axios.post('http://localhost:5000/update_client?content-type=application/json; charset=utf-8', {
            token: localStorage.getItem('token'),
            name,
            second_name,
            third_name,
            client_address,
            phone_number
        })
        window.location.reload();
        console.log('updated client')
    } catch (e) {
        console.log(e)
    }
}

export const get_shops = () => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/get_shops?content-type=application/json; charset=utf-8', {
                
            })
            dispatch(get_shops_reducer(response.data.shops))
        } catch (e) {
            console.log(e)
        }
    }
}

export const get_products_in_shop = (shop_id) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/get_products_in_shop?content-type=application/json; charset=utf-8', {
                shop_id
            })
            dispatch(get_products_in_shop_reducer(response.data.products_in_shop))
        } catch (e) {
            console.log(e)
        }
    }
}