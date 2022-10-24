import { createAction } from './../../utils/reducer/reducer';
import { CART_ACTIONS } from './cart.types';

export const setIsCartOpen = () =>
    createAction(CART_ACTIONS.TOOGLE_CART_OPEN)

export const addItemToCart = (itemToAdd) =>
    createAction(CART_ACTIONS.ADD_ITEM_TO_CART, itemToAdd)

export const deleteItemFromCart = (itemId) =>
    createAction(CART_ACTIONS.DELETE_ITEM_FROM_CART, itemId)

export const changeCartItemQuantity = (id, value) =>
    createAction(CART_ACTIONS.CHANGE_CART_ITEM_QUANTITY, { id: id, value: value })

export const addCartItem = (cartItems, productToAdd) => {
    const exists = cartItems.find((item) => item.id === productToAdd.id)

    if (exists) {
        return cartItems.map((item) =>
            item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const deleteCartItem = (cartItems, productToDeleteId) => {
    return cartItems.filter(item => item.id !== productToDeleteId)
}

export const changeItemQuantity = (cartItems, productId, value) => {
    return cartItems.map((item) =>
        item.id === productId
            ? item.quantity + (JSON.parse(value)) !== 0
                ? { ...item, quantity: item.quantity + (JSON.parse(value)) }
                : item
            : item
    )
}