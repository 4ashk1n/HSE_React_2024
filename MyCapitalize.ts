type MyCapitalize<T extends string> =
    T extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}`: T;

// Example
let a: MyCapitalize<"aaaa"> = "Aaaa"
// let a: MyCapitalize<"aaaa"> = "aaaa" // => ERR