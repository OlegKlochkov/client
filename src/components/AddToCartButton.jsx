import './addToCartButton.css'
const AddToCartButton = ( props ) => {
    function addToCart(product){
        let shoppingCart = []
        try {
            shoppingCart = JSON.parse(localStorage.getItem('cart'));
            shoppingCart.push(product);
            localStorage.setItem('cart', JSON.stringify(shoppingCart));
        } catch (ReferenceError) {
            shoppingCart = [product]
            localStorage.setItem('cart', JSON.stringify(shoppingCart));
        }
    }
    return (
        <div className="addToCartButton" product={props.product} onClick={() => addToCart(props.product)}>Добавить в корзину</div>
    )
}
export default AddToCartButton