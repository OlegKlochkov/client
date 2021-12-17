import "./shopPage.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { get_products_in_shop } from "../../actions/user"
import product_logo from "../assets/product_logo.png"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const ShopPage = () => {
    let navigate = useNavigate()
    const { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_products_in_shop(id));
    }, [])
    const products_in_shop = useSelector(state => state.user.products_in_shop)
    console.log(useSelector(state => state.user.products_in_shop));
    return (
        <div>
            {
                products_in_shop.map((event) => (
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
export default ShopPage