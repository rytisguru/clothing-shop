import { useContext } from 'react';
import { CartContext, CART_ACTIONS } from './../../context/cart.context';

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { dispatch, totalItems } = useContext(CartContext)

    const toogleIsCartOpen = () => dispatch({ type: CART_ACTIONS.TOOGLE_CART_OPEN })

    return (
        <div className="cart-icon-container">
            <ShoppingIcon onClick={toogleIsCartOpen} className="shopping-icon"></ShoppingIcon>
            <span className="item-count">{totalItems}</span>
        </div>
    )
}

export default CartIcon;