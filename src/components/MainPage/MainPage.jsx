import "./mainPage.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { get_categories, get_products } from "../../actions/user"
import product_logo from "../assets/product_logo.png"
import { useNavigate } from "react-router-dom"
import AddToCartButton from "../AddToCartButton"

const MainPage = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_products());
        dispatch(get_categories())
    }, [])
    const products = useSelector(state => state.user.products)
    const categories = useSelector(state => state.user.categories)
    return (
        <div className="mainPage">
            <div className="categories">
            {
                    categories.map((event) => (
                        <div className="categoryName" onClick={() => navigate("/" + event.category_name)}>{event.category_name}</div>
                    ))
                }
            </div>
            <div className="products">
                {
                    products.map((event) => (
                        <div className="product" >
                            <img src={event.img ? event.img : product_logo} alt="productImage" className="productImage" />
                            <div className="productName">{event.name}</div>
                            <div className="productPrice">{event.price}</div>
                            <div className="productPageRedirect" onClick={() => navigate("/product/" + event.products_id)}>Подробнее</div>
                            <AddToCartButton product={event} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default MainPage