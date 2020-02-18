export const incrementKey = (key, value) => (obj) => ({
    ...obj,
    [key]: obj[key] + value
});
