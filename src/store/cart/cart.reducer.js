import { CART_ACTIONS } from './cart.types';
import { deleteCartItem, addCartItem, changeItemQuantity } from "./cart.action";

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: []
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTIONS.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, payload),
            }
        case CART_ACTIONS.DELETE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: deleteCartItem(state.cartItems, payload),
            }
        case CART_ACTIONS.CHANGE_CART_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: changeItemQuantity(state.cartItems, payload.id, payload.value)
            }
        case CART_ACTIONS.TOOGLE_CART_OPEN:
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            }
        default:
            return state
    }
} 