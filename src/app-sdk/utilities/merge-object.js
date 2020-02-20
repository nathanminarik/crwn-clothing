export const mergeObject = (objectToMerge) => (obj) => ({
    ...obj,
    ...objectToMerge
});
