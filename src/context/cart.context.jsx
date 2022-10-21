import { createContext, useReducer } from "react";

const addCartItem = (cartItems, productToAdd) => {
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

const deleteCartItem = (cartItems, productToDeleteId) => {
    return cartItems.filter(item => item.id !== productToDeleteId)
}

const changeItemQuantity = (cartItems, productId, value) => {
    return cartItems.map((item) =>
        item.id === productId
            ? item.quantity + (JSON.parse(value)) !== 0
                ? { ...item, quantity: item.quantity + (JSON.parse(value)) }
                : item
            : item
    )
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    deleteItemFromCart: () => { },
    changeCartItemQuantity: () => { },
    totalItems: 0,
    totalPrice: 0
})

export const CART_ACTIONS = {
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    DELETE_ITEM_FROM_CART: 'DELETE_ITEM_FROM_CART',
    CHANGE_CART_ITEM_QUANTITY: 'CHANGE_CART_ITEM_QUANTITY',
    TOOGLE_CART_OPEN: 'TOOGLE_CART_OPEN'
}

const cartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTIONS.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, payload)
            }
        case CART_ACTIONS.DELETE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: deleteCartItem(state.cartItems, payload.id)
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
            throw new Error(`Unhandled type ${type} given in cartReducer`)
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}

export const CartProvider = ({ children }) => {
    const [{ isCartOpen, cartItems }, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

    const value = {
        isCartOpen,
        cartItems,
        totalItems,
        totalPrice,
        dispatch
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}