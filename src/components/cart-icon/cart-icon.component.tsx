import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { selectToTalItems } from '../../store/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import {
    CartIconContainer,
    ItemCount
} from './cart-icon.styles';

const CartIcon = () => {
    const dispatch = useDispatch()
    const totalItems = useSelector(selectToTalItems)

    const toogleIsCartOpen = () => dispatch(setIsCartOpen())

    return (
        <CartIconContainer>
            <ShoppingIcon onClick={toogleIsCartOpen} className="shopping-icon"></ShoppingIcon>
            <ItemCount>{totalItems}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;