type ParseURLParams<T extends string> =
    T extends `${infer Begin}:${infer Param}/${infer Rest}` ? Param | ParseURLParams<`${Rest}`>
    : T extends `${string}:${infer Param}` ? Param: never;
/*
1. С помощью infer разделяем строку по предоставленному шаблону
2. Параметр добавляем в перечисление
3. Остаток строки кидаем в рекурсию, если он существует
4. Если остался лишь параметр, добавляем его в перечисление
5. Если тип не соответствует ни одному шаблону - не добавляем его никуда
 */


// Example

type url1 = "posts/:id/:user"
let a: ParseURLParams<url1> = "id";
let b: ParseURLParams<url1> = "user";
// let c: ParseURLParams<url1> = "posts"; // ERR
// let d: ParseURLParams<url1> = "smth"; // ERR