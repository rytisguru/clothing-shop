import { createContext, useState } from "react";

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

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const deleteItemFromCart = (productToDeleteId) => {
        setCartItems(deleteCartItem(cartItems, productToDeleteId))
    }

    const changeCartItemQuantity = (productId, value) => {
        setCartItems(changeItemQuantity(cartItems, productId, value))
    }

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        deleteItemFromCart,
        changeCartItemQuantity,
        cartItems,
        totalItems,
        totalPrice
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}