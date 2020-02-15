import React from 'react';

import './cart-item.styles.scss';

export const CartItem = ({
    item: {
        imageUrl,
        name,
        price,
        qty
    }
}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{qty} * ${price}</span>
        </div>
    </div>
);
