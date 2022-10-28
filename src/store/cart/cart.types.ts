import { CategoryItem } from "../categories/category.types";

export enum CART_ACTIONS {
    SET_CART_ITEMS = 'cart/SET_CART_ITEMS',
    TOOGLE_CART_OPEN = 'cart/TOOGLE_CART_OPEN'
}

export type CartItem = CategoryItem & {
    quantity: number;
}