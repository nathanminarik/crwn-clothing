export const getDuplicate = (arr, selectorKey = 'id') => (item) => arr.find(arrItem => arrItem[selectorKey] === item[selectorKey])
