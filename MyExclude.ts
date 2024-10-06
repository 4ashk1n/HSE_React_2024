type MyExclude<T, U> = T extends U ? undefined : T;

// Example
type t = MyExclude<"a" | "b" | "c", "a">;
