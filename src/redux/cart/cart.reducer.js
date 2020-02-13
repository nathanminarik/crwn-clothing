import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
    isHidden: true,
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isHidden: !state.isHidden
            }

        default:
            return state;
    }
}