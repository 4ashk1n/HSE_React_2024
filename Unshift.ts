type Unshift<ArrayType, Elem> = [Elem, ...ArrayType[]];
/*
 * 1. Генерируем массив из Elem на первом месте и элементами передаваемого массива с помощью оператора ...
 */

// Example
const A: Unshift<number, string> = ["d", 1, 2, 3];
