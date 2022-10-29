import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, deleteItemFromCart, clearItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartItem as TCartItem } from '../../store/cart/cart.types';

import {
    CheckoutItemContainer,
    ImageContainer,
    Quantity,
    Arrow,
    Value,
    RemoveButton,
    BaseSpan
} from './checkout-item.styles';

type CheckOutItemProps = {
    product: TCartItem;
}

const CheckOutItem: FC<CheckOutItemProps> = memo(({ product }) => {
    const { id, imageUrl, name, quantity, price } = product
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch()

    const deleteProduct = () => dispatch(clearItemFromCart(cartItems, product))
    const increase = () => dispatch(addItemToCart(cartItems, product))
    const decrease = () => dispatch(deleteItemFromCart(cartItems, product))

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity>
                <Arrow onClick={decrease}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={increase}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan> {price}</BaseSpan>
            <RemoveButton onClick={deleteProduct}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
})

export default CheckOutItem;