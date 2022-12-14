import { useContext } from 'react';
import { CartContext, CART_ACTIONS } from '../../context/cart.context';

import Button from './../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product
    const { dispatch } = useContext(CartContext)
    
    const addProductToCart = () => dispatch({ type: CART_ACTIONS.ADD_ITEM_TO_CART, payload: product })

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={"inverted"} onClick={addProductToCart} type="button">ADD TO CART</Button>
        </div>
    )
}

export default ProductCard;