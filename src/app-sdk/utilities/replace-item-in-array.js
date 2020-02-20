export const replaceItemInArray = (arr, selectorKey) => (item) => arr.map(arrItem => 
    arrItem[selectorKey] === item[selectorKey]
        ? item
        : arrItem
);
