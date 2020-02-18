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

export const processAddCartItem = (arr, item, key = 'qty', identifier = 'id') => eitherOrPipe(
    objectExistsInArray(arr, { selectorKey: identifier })(item),
    [ getDuplicate(arr), incrementKey(key, 1), replaceItemInArray(arr, { selectorKey: identifier }) ],
    [ mergeObject({ [key]: 1 }), addItemToArray(arr) ]
)(item);

export const processDecreaseItemQty = (arr, item, key = 'qty', identifier = 'id') => eitherOrPipe(
    item.qty === 1,
    [ removeObjectFromArray(arr, { selectorKey: identifier }) ],
    [ getDuplicate(arr), incrementKey(key, -1), replaceItemInArray(arr, { selectorKey: identifier }) ]
)(item);

export const processRemoveCartItem = (arr, item, identifier = 'id') => eitherOrPipe(
    objectExistsInArray(arr, { selectorKey: identifier })(item),
    [ removeObjectFromArray(arr, { selectorKey: identifier }) ],
    [ (item) => `Item ${item} Does Not Exist` ]
)(item)
