type MyCapitalize<T extends string> =
    T extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}`: T;
/*
 * 1. Разделяем строку на первый символ и остаток с помощью infer
 * 2. Если получилось - делаем первую букву заглавной с помощью Uppercase
 * 3. Если не получилось, значит, строка пустая, и можем оставить ее же
 */


// Example
let a: MyCapitalize<"aaaa"> = "Aaaa"
// let a: MyCapitalize<"aaaa"> = "aaaa" // => ERR