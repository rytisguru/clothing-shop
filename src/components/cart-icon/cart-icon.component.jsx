import { useContext } from 'react';
import { CartContext } from './../../context/cart.context';

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const { setIsCartOpen } = useContext(CartContext)

    const toogleIsCartOpen = () => setIsCartOpen((prev) => !prev)

    return (
        <div className="cart-icon-container">
            <ShoppingIcon onClick={toogleIsCartOpen} className="shopping-icon"></ShoppingIcon>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;