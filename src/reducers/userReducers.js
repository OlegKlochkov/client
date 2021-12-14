const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'
const GET_REVIEWS = 'GET_REVIEWS'


const defaultstate = {
    currentUser: {},
    isAuth: false,
    products: [],
    product: {},
    reviews: []
}

export default function userReducers(state = defaultstate, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            }
        default: return state;
    }
}


export const setUser = user => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })
export const get_products_reducer = products => ({ type: GET_PRODUCTS, payload: products })
export const get_product_reducer = product => ({ type: GET_PRODUCT, payload: product })
export const get_reviews_reducer = reviews => ({ type: GET_REVIEWS, payload: reviews })