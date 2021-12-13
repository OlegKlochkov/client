import "./mainPage.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { get_products } from "../../actions/user"
import product_logo from "../assets/product_logo.png"
import { useNavigate } from "react-router-dom"

const MainPage = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_products())
    }, [])
    const products = useSelector(state => state.user.products)
    console.log(products);
    return (
        <div>
            {
                products.map((event) => (
                    <div className="product" onClick={() => navigate("/product/" + event.products_id)}>
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