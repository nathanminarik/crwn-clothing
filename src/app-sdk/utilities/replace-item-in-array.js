export const replaceItemInArray = (arr) => (item) => arr.map(arrItem => 
    arrItem.id === item.id
        ? item
        : arrItem
);
