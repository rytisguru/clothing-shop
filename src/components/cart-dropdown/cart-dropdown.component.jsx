import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

import CartItem from '../cart-item/cart-item.component';
import Button from './../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()

    const goToCheckOut = () => {
        navigate('/checkout')
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.length ? (cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))) : (
                    <span class="empty-message">Your cart is empty</span>
                )}
            </div>
            <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
        </div >
    )
}

export default CartDropDown;