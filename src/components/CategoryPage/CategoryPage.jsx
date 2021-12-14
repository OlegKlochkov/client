import "./categoryPage.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { get_category_products } from "../../actions/user"
import product_logo from "../assets/product_logo.png"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const CategoryPage = () => {
    //const isAuth = useSelector(state => state.user.isAuth)
    let navigate = useNavigate()
    const { category_name } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_category_products(category_name))
    }, [])
    const category_products = useSelector(state => state.user.category_products)
    return (
        <div className="categoryPage">
                            {
                    category_products.map((event) => (
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
export default CategoryPage