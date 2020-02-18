import { CartActionTypes } from './cart.types';

export const addCartItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const decreaseItemQty = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const removeCartItemById = (id) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: { id }
});

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});




