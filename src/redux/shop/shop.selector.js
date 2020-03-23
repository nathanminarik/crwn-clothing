import { createSelector } from 'reselect';
// import { SHOP_DATA } from './../../mock-data';

// const generateCollectionIdMap = (shopData) => shopData.reduce((acc, { id, routeName }) => ([
//     ...acc,
//     [routeName, id]
// ]), []);

// const COLLECTION_ID_MAP = new Map(generateCollectionIdMap(SHOP_DATA))

const selectShop = state => state.shop;

export const selectSelectorWithLimit = (limit, selector) => createSelector(
    [ selector ],
    data => data.filter((_, idx) => idx < limit)
);

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsAsArray = createSelector(
    [selectCollections],
    collections => collections ? Object.values(collections) : []
);

export const selectCollection = (collectionKey) => createSelector(
    [selectCollections],
    collections => collections ? collections[collectionKey]: null
);

export const selectIsCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => Boolean(shop.collections)
);
