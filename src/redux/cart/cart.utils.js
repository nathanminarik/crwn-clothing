import {
    addItemToArray,
    eitherOrPipe,
    getDuplicate,
    incrementKey,
    mergeObject,
    objectExistsInArray,
    removeObjectFromArray,
    replaceItemInArray
} from './../../app-sdk';

export const processAddCartItem = (arr, item, key = 'qty', selectorKey = 'id') => eitherOrPipe(
    objectExistsInArray(arr, selectorKey)(item),
    [ getDuplicate(arr, selectorKey), incrementKey(key, 1), replaceItemInArray(arr, selectorKey) ],
    [ mergeObject({ [key]: 1 }), addItemToArray(arr) ]
)(item);

export const processDecreaseItemQty = (arr, item, key = 'qty', selectorKey = 'id') => eitherOrPipe(
    item.qty === 1,
    [ removeObjectFromArray(arr, selectorKey) ],
    [ getDuplicate(arr, selectorKey), incrementKey(key, -1), replaceItemInArray(arr, selectorKey) ]
)(item);

export const processRemoveCartItem = (arr, item, selectorKey = 'id') => eitherOrPipe(
    objectExistsInArray(arr, selectorKey)(item),
    [ removeObjectFromArray(arr, selectorKey) ],
    [ (item) => `Item ${item} Does Not Exist` ]
)(item);
