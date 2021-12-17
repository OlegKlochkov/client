import "./shopsPage.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { get_shops } from "../../actions/user"
import { useNavigate } from "react-router-dom"

const ShopsPage = () => {
    let navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_shops())
    }, [])
    const shops = useSelector(state => state.user.shops);
    return (
        <div className="shopsPage">
            <div className="shops">
                {
                    shops.map((event) => (
                        <div className="shop" onClick={() => navigate("/shop/" + event.shop_id)}>
                            <div className="shopAddress">{event.shop_address}</div>
                            <div className="shopWorkingHours">{event.shop_working_hours}</div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default ShopsPage