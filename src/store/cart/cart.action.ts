import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';
import { CategoryItem } from '../categories/category.types';
import { CART_ACTIONS, CartItem } from './cart.types';

export type SetIsCartOpen = Action<CART_ACTIONS.TOOGLE_CART_OPEN>

export type SetCartItems = ActionWithPayload<CART_ACTIONS.SET_CART_ITEMS, CartItem[]>

export const setIsCartOpen = withMatcher(
    (): SetIsCartOpen =>
        createAction(CART_ACTIONS.TOOGLE_CART_OPEN)
);

export const setCartItems = withMatcher(
    (cartItems: CartItem[]): SetCartItems =>
        createAction(CART_ACTIONS.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (cartItems: CartItem[], itemToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, itemToAdd)
    return setCartItems(newCartItems);
};

export const deleteItemFromCart = (cartItems: CartItem[], itemToDelete: CartItem) => {
    const newCartItems = deleteCartItem(cartItems, itemToDelete)
    return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems);
};

export const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
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

export const deleteCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);