import { pipe } from "./pipe"

export const eitherOrPipe = (predicate, truthyFuncArr, falseyFuncArr) => pipe(
    ...predicate
        ? truthyFuncArr
        : falseyFuncArr
);
