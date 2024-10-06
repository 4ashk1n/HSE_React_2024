type ParseURLParams<T extends string> =
    T extends `${infer Begin}:${infer Param}/${infer Rest}` ? Param | ParseURLParams<`${Rest}`>
    : T extends `${string}:${infer Param}` ? Param: never;

// Example

type url1 = "posts/:id/:user"
let a: ParseURLParams<url1> = "id";
let b: ParseURLParams<url1> = "user";
// let c: ParseURLParams<url1> = "posts"; // ERR
// let d: ParseURLParams<url1> = "smth"; // ERR