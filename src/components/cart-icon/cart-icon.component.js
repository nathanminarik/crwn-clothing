import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.styles.scss';
import { toggleCartHidden } from './../../redux'
import { ShoppingBagIcon } from './../../assets';

export const CartIconNotConnected = ({
    toggleCartHidden
}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingBagIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export const CartIcon = connect(null, mapDispatchToProps)(CartIconNotConnected)