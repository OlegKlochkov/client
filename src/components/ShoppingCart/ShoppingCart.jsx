import "./shoppingCart.css"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { get_client, get_shops } from "../../actions/user"
import product_logo from "../assets/product_logo.png"
import { useNavigate } from "react-router-dom"

const ShoppingCart = () => {
    let navigate = useNavigate()
    const isAuth = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_client(function (e){setAddress(e.client_address ? e.client_address : 'не указан')}))
        dispatch(get_shops())
    }, [])
    const shops = useSelector(state => state.user.shops);
    const [choiceVisible, setChoiceVisible] = useState(false);
    const [client_address, setAddress] = useState('');
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
        let indexInCart = shoppingCart.map(function(e){return e.products_id}).indexOf(product.products_id);
        if(shoppingCart[indexInCart].amount === 1){
            shoppingCart.splice(shoppingCart.indexOf(product), 1);
        }else{
            shoppingCart[indexInCart].amount -= 1;
        }
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
                        <div className="productPrice">Цена одного товара: {event.price}</div>
                        <div className="productAmount">Количество: {event.amount}</div>
                        <div className="productsPrice">Итоговая цена: {event.price * event.amount}</div>
                        <div className="productPageRedirect" onClick={() => navigate("/product/" + event.products_id)}>Подробнее</div>
                    </div>
                ))}
                {!(products === 'Корзина пустая' || products === null) &&
            <div className="clearCartButton" onClick={() => {localStorage.removeItem('cart'); window.location.reload()}}>Очистить корзину</div>}
            {isAuth ? 
            <div className="order">
                {!client_address === 'не указан' && <div className="createOrderButton">Оформить доставку</div>}
                <div className="createOrderButton" onClick={() => setChoiceVisible(!choiceVisible)}>Оформить самовывоз</div>
                {choiceVisible && <div className="shopChoice">
                    {shops.map((event) => (
                        <div className="shop">
                            <div className="shopAddress">{event.shop_address}</div>
                            <div className="shopWorkingHours">{event.shop_working_hours}</div>
                            <div className="selectShop">Самовывоз из этого магазина</div>
                        </div>
                    ))}
                    </div>}
            </div>  : 
            <div className="">Войдите, чтобы оформить заказ</div>}
        </div>
    )
}
export default ShoppingCart