import { pipe } from "./pipe"
import { identity } from './identity';

export const eitherOrPipe = (predicate = false, truthyFuncArr = [ identity ], falseyFuncArr = [ identity ]) => pipe(
    ...predicate
        ? truthyFuncArr
        : falseyFuncArr
);
