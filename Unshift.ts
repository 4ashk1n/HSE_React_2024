type Unshift<ArrayType, Elem> = [Elem, ...ArrayType[]];

// Example
const A: Unshift<number, string> = ["d", 1, 2, 3];
