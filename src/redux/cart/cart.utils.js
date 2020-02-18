import {
    addItemToArray,
    getDuplicate,
    incrementKey,
    isDuplicate,
    mergeObject,
    pipe,
    replaceItemInArray
} from './../../app-sdk';

export const processAddItem = (arr, item, key = 'qty') => isDuplicate(arr)(item)
    ? pipe(
        getDuplicate(arr),
        incrementKey(key, 1),
        replaceItemInArray(arr)
    )(item)
    : pipe(
        mergeObject({ [key]: 1 }),
        addItemToArray(arr)
    )(item)