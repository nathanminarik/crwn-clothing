export const addKey = (key, defaultVal = undefined) => (obj) => ({
    ...obj,
    [key]: defaultVal
});
