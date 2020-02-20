export const removeObjectFromArray = (arr, selectorKey) => (item) => arr.filter((arrItem) => arrItem[selectorKey] !== item[selectorKey]);
