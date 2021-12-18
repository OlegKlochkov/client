import "./shoppingCart.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import {  } from "../../actions/user"
import product_logo from "../assets/product_logo.png"
import { useNavigate } from "react-router-dom"
import AddToCartButton from "../AddToCartButton"

const ShoppingCart = () => {
    let navigate = useNavigate()
/*     const dispatch = useDispatch()
    useEffect(() => {
        dispatch()
    }, []) */
    
    function getProductsInCart() {
        try {
            return (JSON.parse(localStorage.getItem('cart')))
        } catch (ReferenceError) {
            return ('Корзина пустая')
        }
    }

    function deleteFromCart(product){
        let shoppingCart = []
        shoppingCart = JSON.parse(localStorage.getItem('cart'));
        shoppingCart.splice(shoppingCart.indexOf(product), 1);
        localStorage.setItem('cart', JSON.stringify(shoppingCart));
        window.location.reload();
    }

    const products = getProductsInCart();
    return (
        <div className="shoppingCart">
            {products === 'Корзина пустая' || products === null ? 'Корзина пустая' :
                products.map((event) => (
                    <div className="product">
                        <div className="deleteFromCartButton" onClick={() => deleteFromCart(event)}>Удалить из корзины</div>
                        <img src={event.img ? event.img : product_logo} alt="productImage" className="productImage" />
                        <div className="productName">{event.name}</div>
                        <div className="productPrice">{event.price}</div>
                        <div className="productPageRedirect" onClick={() => navigate("/product/" + event.products_id)}>Подробнее</div>
                    </div>
                ))}
                {!(products === 'Корзина пустая' || products === null) &&
                <div className="clearCartButton" onClick={() => {localStorage.removeItem('cart'); window.location.reload()}}>Очистить корзину</div>}
                
        </div>
    )
}
export default ShoppingCart