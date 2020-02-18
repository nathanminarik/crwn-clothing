import { CartActionTypes } from './cart.types';
import {
    processAddCartItem,
    processDecreaseItemQty,
    processRemoveCartItem
} from './cart.utils';

const INITIAL_STATE = {
    isHidden: true,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: processAddCartItem(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: processDecreaseItemQty(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: processRemoveCartItem(state.cartItems, action.payload)
            }
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        default:
            return state;
    }
}