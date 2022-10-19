import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckOut = () => {
    const { cartItems, totalPrice } = useContext(CartContext)

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => (
                <CheckOutItem key={item.id} product={item} />
            ))}
            <div className="total">TOTAL: &#36;{totalPrice}</div>
        </div>
    )
}

export default CheckOut;