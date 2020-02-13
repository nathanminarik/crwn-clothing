import React from 'react';

import './cart-dropdown.styles.scss';
import { CustomButton } from './../custom-button';

export const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)