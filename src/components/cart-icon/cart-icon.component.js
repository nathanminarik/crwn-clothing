import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss';
import { selectCartItemsCount, toggleCartHidden } from './../../redux'
import { ShoppingBagIcon } from './../../assets';

export const CartIconNotConnected = ({
    itemCount,
    toggleCartHidden
}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingBagIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export const CartIcon = connect(mapStateToProps, mapDispatchToProps)(CartIconNotConnected);
