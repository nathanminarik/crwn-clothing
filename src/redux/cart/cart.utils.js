export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

export const isDuplicate = (arr) => (item) => Boolean(
    arr.find(arrItem => arrItem.id === item.id)
);

export const getDuplicate = (arr) => (item) => arr.find(arrItem => arrItem.id === item.id)

export const incrementKey = (key, value) => (obj) => ({
    ...obj,
    [key]: obj[key] + value
});

export const addKey = (key, defaultVal = undefined) => (obj) => ({
    ...obj,
    [key]: defaultVal
});

export const mergeObject = (objectToMerge) => (obj) => ({
    ...obj,
    ...objectToMerge
});

export const addItemToArray = (arr) => (item) => [...arr, item];

export const replaceItemInArray = (arr) => (item) => arr.map(arrItem => 
    arrItem.id === item.id
        ? item
        : arrItem
);

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