import './addToCartButton.css'
const AddToCartButton = ( props ) => {
    function addToCart(product){
        let shoppingCart = []
        try {
            shoppingCart = JSON.parse(localStorage.getItem('cart'));
            let indexInCart = shoppingCart.map(function(e){return e.products_id}).indexOf(product.products_id);
            if(indexInCart === -1){
                product.amount = 1;
                shoppingCart.push(product);
            }else{
                shoppingCart[indexInCart].amount += 1;
            }
            localStorage.setItem('cart', JSON.stringify(shoppingCart));
        } catch (ReferenceError) {
            product.amount = 1;
            shoppingCart = [product]
            localStorage.setItem('cart', JSON.stringify(shoppingCart));
        }
    }
    return (
        <div className="addToCartButton" product={props.product} onClick={() => addToCart(props.product)}>Добавить в корзину</div>
    )
}
export default AddToCartButton