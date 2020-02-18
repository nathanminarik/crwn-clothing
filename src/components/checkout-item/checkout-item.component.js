import React from 'react';
import { connect } from 'react-redux';

import { addCartItem, decreaseItemQty, removeCartItemById } from './../../redux';

import './checkout-item.styles.scss';


export const CheckoutItemNotConnected = ({
    cartItem,
    decreaseItemQty,
    increaseItemQty,
    removeCartItemById
}) => {
    const {
        id,
        imageUrl,
        name,
        price,
        qty
    } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='qty'>
                <div className='arrow' onClick={() => decreaseItemQty(cartItem)}>&#10094;</div>
                <span className='value'>{qty}</span>
                <div className='arrow' onClick={() => increaseItemQty(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeCartItemById(id)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    decreaseItemQty: (item) => dispatch(decreaseItemQty(item)),
    increaseItemQty: (item) => dispatch(addCartItem(item)),
    removeCartItemById: (id) => dispatch(removeCartItemById(id)),
})

export const CheckoutItem = connect(null, mapDispatchToProps)(CheckoutItemNotConnected)