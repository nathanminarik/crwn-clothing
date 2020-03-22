import { ShopActionTyps } from './shop.types';

export const updateCollections = (collectionsMap) => ({
    type: ShopActionTyps.UPDATE_COLLECTIONS,
    payload: collectionsMap
});
