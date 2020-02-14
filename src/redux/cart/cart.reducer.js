import { CartActionTypes } from './cart.types';
import { processAddItem } from './cart.utils';

const INITIAL_STATE = {
    isHidden: true,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: processAddItem(state.cartItems, action.payload)
            }

        default:
            return state;
    }
}