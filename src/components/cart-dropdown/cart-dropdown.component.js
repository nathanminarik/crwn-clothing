import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import { selectCartItems } from './../../redux';
import { CustomButton } from './../custom-button';
import { CartItem } from './../cart-item';

export const CartDropdownNotConnected = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export const CartDropdown = connect(
    mapStateToProps
)(CartDropdownNotConnected)