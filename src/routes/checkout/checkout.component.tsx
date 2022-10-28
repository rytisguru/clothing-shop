import { useSelector } from 'react-redux';
import { selectToTalPrice, selectCartItems } from '../../store/cart/cart.selector';

import CheckOutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';

import {
    CheckOutContainer,
    CheckOutHeader,
    HeaderBlock,
    Total
} from './checkout.styles';

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectToTalPrice)

    return (
        <CheckOutContainer>
            <CheckOutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckOutHeader>
            {cartItems.map((item) => (
                <CheckOutItem key={item.id} product={item} />
            ))}
            <Total>TOTAL: &#36;{totalPrice}</Total>
            <PaymentForm />
        </CheckOutContainer>
    )
}

export default CheckOut;