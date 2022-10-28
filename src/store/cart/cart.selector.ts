import { createSelector } from "reselect"
import { RootState } from "../store"
import { CartState } from "./cart.reducer"

const selectCartReducer = (state: RootState): CartState => state.cart
 
export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectIsCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.isCartOpen
)

export const selectToTalItems = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total + item.quantity, 0)
)

export const selectToTalPrice = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, item) => total + (item['price'] * item['quantity']), 0)
)
