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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    totalItems: 0
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, totalItems }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}