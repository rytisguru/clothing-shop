import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import {
    CartDropDownContainer,
    CartItems,
    EmptyMessage
} from './cart-dropdown.styles';

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()

    const goToCheckOut = () => {
        navigate('/checkout')
    }

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length ? (cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))) : (
                    <EmptyMessage>Your cart is empty</EmptyMessage>
                )}
            </CartItems>
            <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
        </CartDropDownContainer >
    )
}

export default CartDropDown;