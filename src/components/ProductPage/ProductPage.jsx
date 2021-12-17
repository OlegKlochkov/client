import "./productPage.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { add_review, get_product, get_product_categories, get_reviews } from "../../actions/user"
import product_logo from "../assets/product_logo.png"
import { useParams } from "react-router-dom"
import Input from "../Input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ProductPage = () => {
    let navigate = useNavigate()
    const isAuth = useSelector(state => state.user.isAuth)
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState('');
    const { id } = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_product(id));
        dispatch(get_reviews(id));
        dispatch(get_product_categories(id))
    }, [])
    const product = useSelector(state => state.user.product)
    const reviews = useSelector(state => state.user.reviews)
    const product_categories = useSelector(state => state.user.product_categories)
    return (
        <div>
            <div>
                <img src={product.img ? product.img : product_logo} alt="productImage" className="productImage" />
                <div className="productName">{product.name}</div>
                <div className="productPrice">{product.price}</div>
                <div className="productCategories">
                {
                product_categories.map((event) => (
                    <div className="productCategory" onClick={() => navigate("/" + event.category_name)}>{event.category_name}</div>
                ))
            }
                </div>
            </div>
            <div className="reviews">
                {isAuth && 
                <div className="addReview">
                <Input value={message} setValue={setMessage} type="text" placeholder="Введите отзыв" />
                <Input value={rating} setValue={setRating} type="text" placeholder="Оцените продукт (от 1 до 5)" />
                <button className="" onClick={() => add_review(id, message, rating)}>Оставить отзыв</button>
                </div>
                }
                                {!isAuth && 
                <div className="addReviewNotLoggedIn">
                    Войдите или зарегестрируйтесь, чтобы оставить отзыв
                </div>
                }
            {
                reviews.map((event) => (
                    <div className="review">
                        <div className="reviewRating">{event.rating}</div>
                        <div className="reviewAuthor">{event.name} {event.second_name}</div>
                        <div className="reviewMessage">{event.message}</div>
                    </div>
                ))
            }
            </div>
        </div>

    )
}
export default ProductPage