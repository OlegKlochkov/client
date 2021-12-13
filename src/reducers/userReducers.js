const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'
const GET_PRODUCTS = 'GET_PRODUCTS'


const defaultstate = {
    currentUser: {},
    isAuth: false,
    products: []
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
        default: return state;
    }
}


export const setUser = user => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT})
export const get_products_reducer = product => ({ type: GET_PRODUCTS, payload: product})