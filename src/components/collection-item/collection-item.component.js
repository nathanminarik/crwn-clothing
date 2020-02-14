import React from 'react';
import { connect } from 'react-redux';
import './collection-item.styles.scss';

import { CustomButton } from './../custom-button';
import { addCartItem } from './../../redux';

export const CollectionItemNotConnected = ({addCartItem, item }) => {
    const {
        imageUrl,
        name,
        price
    } = item;

    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            >
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton variant='inverted' onClick={() => addCartItem(item)}>
                Add to Cart
            </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addCartItem: (item) => dispatch(addCartItem(item))
});

export const CollectionItem = connect(
    null,
    mapDispatchToProps
)(CollectionItemNotConnected);
