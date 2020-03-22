import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux';
import { CollectionItem } from '../collection-item';
import { WithSpinner } from '../with-spinner';

import './collection.styles.scss';

export const CollectionNotConnected = ({ collection }) => {
    const { items, title } = collection;
    return (
        <div className='collection'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => <CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export const Collection = connect(mapStateToProps)(CollectionNotConnected);
