export const isDuplicate = (arr) => (item) => Boolean(
    arr.find(arrItem => arrItem.id === item.id)
);