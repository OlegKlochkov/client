const SET_USER = 'SET_USER'
const LOGOUT = 'LOGOUT'
const GET_PRODUCTS = 'GET_PRODUCTS'
const GET_PRODUCT = 'GET_PRODUCT'
const GET_REVIEWS = 'GET_REVIEWS'
const GET_CATEGORIES = 'GET_CATEGORIES'
const GET_PRODUCT_CATEGORIES = 'GET_PRODUCT_CATEGORIES'
const GET_CATEGORY_PRODUCTS = 'GET_CATEGORY_PRODUCTS'
const GET_CLIENT = 'GET_CLIENT'
const GET_SHOPS = 'GET_SHOPS'
const GET_PRODUCTS_IN_SHOP = 'GET_PRODUCTS_IN_SHOP'

const defaultstate = {
    currentUser: {},
    isAuth: false,
    products: [],
    product: {},
    reviews: [],
    categories: [],
    product_categories: [],
    category_products: [],
    client: {},
    shops: [],
    products_in_shop: []
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
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case GET_PRODUCT_CATEGORIES:
            return {
                ...state,
                product_categories: action.payload
            }
        case GET_CATEGORY_PRODUCTS:
            return {
                ...state,
                category_products: action.payload
            }
        case GET_CLIENT:
            return {
                ...state,
                client: action.payload
            }
        case GET_SHOPS:
            return {
                ...state,
                shops: action.payload
            }
        case GET_PRODUCTS_IN_SHOP:
            return {
                ...state,
                products_in_shop: action.payload
            }
        default: return state;
    }
}


export const setUser = user => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })
export const get_products_reducer = products => ({ type: GET_PRODUCTS, payload: products })
export const get_product_reducer = product => ({ type: GET_PRODUCT, payload: product })
export const get_reviews_reducer = reviews => ({ type: GET_REVIEWS, payload: reviews })
export const get_categories_reducer = categories => ({ type: GET_CATEGORIES, payload: categories })
export const get_product_categories_reducer = product_categories => ({ type: GET_PRODUCT_CATEGORIES, payload: product_categories })
export const get_category_products_reducer = category_products => ({ type: GET_CATEGORY_PRODUCTS, payload: category_products })
export const get_client_reducer = client => ({ type: GET_CLIENT, payload: client })
export const get_shops_reducer = shops => ({ type: GET_SHOPS, payload: shops })
export const get_products_in_shop_reducer = products_in_shop => ({type: GET_PRODUCTS_IN_SHOP, payload: products_in_shop})