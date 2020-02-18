export const objectExistsInArray = (arr, { selectorKey }) => (item) => arr.some(arrItem => arrItem[selectorKey] === item[selectorKey]);
