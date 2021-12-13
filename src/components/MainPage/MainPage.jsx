import "./mainPage.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { get_products } from "../../actions/user"
import product_logo from "../assets/product_logo.png"

const MainPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_products())
    }, [])
    const products = useSelector(state => state.user.products)
    return (
        <div onClick={() => console.log(products)}>
            {
                products.map((event) => (
                    <div className="product">
                        <img src={event.img ? event.img : product_logo} alt="productImage" className="productImage" />
                        <div className="productName">{event.name}</div>
                        <div className="productPrice">{event.price}</div>
                    </div>
                ))
            }
        </div>
    )
}
export default MainPage