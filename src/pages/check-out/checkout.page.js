import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from './../../redux';
import { CheckoutItem, StripeButton } from './../../components';

import './checkout.styles.scss'

export const CheckoutPageNotConnected = ({
    cartItems,
    cartTotal
}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
            <div className='total'>
                <span>Total: ${ cartTotal }</span>
            </div>
            <div className='test-warning'>
                *Please use the following test credit
                <br />
                4242424242424242 - Exp: Any future date - CVV: Any 3 digits
            </div>
            <StripeButton price={cartTotal} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export const CheckoutPage = connect(mapStateToProps)(CheckoutPageNotConnected);
