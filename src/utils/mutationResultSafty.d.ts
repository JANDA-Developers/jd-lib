import { ExecutionResult } from "graphql";
declare function muResult<D, Q extends keyof D>(result: void | undefined | null | ExecutionResult<D>, queryName: Q, returnKey?: undefined): false | true;
declare function muResult<D, Q extends keyof D, R extends keyof D[Q]>(result: void | undefined | null | ExecutionResult<D>, queryName: Q, returnKey: R): false | D[Q][R];
export default muResult;
