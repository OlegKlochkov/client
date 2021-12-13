import "./productPage.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { get_product, get_products } from "../../actions/user"
import product_logo from "../assets/product_logo.png"
import { useParams } from "react-router-dom"

const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_product(id))
    }, [])
    const product = useSelector(state => state.user.product)
    return (
        <div onClick={() => console.log(product)}>
            <img src={product.img ? product.img : product_logo} alt="productImage" className="productImage" />
            <div className="productName">{product.name}</div>
            <div className="productPrice">{product.price}</div>
        </div>
    )
}
export default ProductPage