import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden, selectCartItems } from './../../redux';
import { pipe } from './../../app-sdk';

import { CustomButton } from './../custom-button';
import { CartItem } from './../cart-item';


import './cart-dropdown.styles.scss';

export const CartDropdownNotConnected = ({ cartItems, dispatch, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length
                    ? cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    : <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            dispatch(toggleCartHidden());
            return history.push('/checkout')}
        }>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export const CartDropdown = pipe(
    connect(mapStateToProps),
    withRouter
)(CartDropdownNotConnected);
