import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.scss';

const CheckOutItem = ({ product }) => {
    const { id, imageUrl, name, quantity, price } = product
    const { deleteItemFromCart, changeCartItemQuantity } = useContext(CartContext)

    const deleteProduct = () => deleteItemFromCart(id)
    const increase = () => changeCartItemQuantity(id, "1")
    const decrease = () => changeCartItemQuantity(id, "-1")

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={decrease}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={increase}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={deleteProduct}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem;