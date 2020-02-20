import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsAsArray } from './../../redux';
import { CollectionPreview } from './../collection-preview';

import './collections-overview.styles.scss';

export const CollectionsOverviewNotConnected = ({
    collections
}) => (
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => 
            <CollectionPreview key={id} {...otherCollectionProps} />)}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsAsArray
});

export const CollectionsOverview = connect(mapStateToProps)(CollectionsOverviewNotConnected);
