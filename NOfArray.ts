// Generic which should return type of N'th element of Array
type NOfArray<ArrayObj extends any[], N extends number> = ArrayObj[N];


// Example
type arr = [string, number, boolean];

type n0 = NOfArray<arr, 0>;
type n1 = NOfArray<arr, 1>;
type n2 = NOfArray<arr, 2>;

const a: n0 = "ok it works";
console.log(typeof a)