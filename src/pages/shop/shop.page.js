import React from 'react';
import { Route } from 'react-router-dom';

import { Collection, CollectionsOverview } from './../../components';

export const ShopPage = ({
    match
}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={Collection} />
    </div>
);
