import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from './../../store/cart/cart.action';
import { selectToTalItems } from '../../store/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const dispatch = useDispatch()
    const totalItems = useSelector(selectToTalItems)

    const toogleIsCartOpen = () => dispatch(setIsCartOpen())

    return (
        <div className="cart-icon-container">
            <ShoppingIcon onClick={toogleIsCartOpen} className="shopping-icon"></ShoppingIcon>
            <span className="item-count">{totalItems}</span>
        </div>
    )
}

export default CartIcon;