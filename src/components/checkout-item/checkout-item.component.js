import React from 'react';
import './checkout-item.styles.scss';


export const CheckoutItem = ({
    cartItem
}) => {
    const {
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
            <span className='qty'>{qty}</span>
            <span className='price'>{price}</span>
            <div className='remove-button'>
                &#10005;
            </div>
        </div>
    )
}