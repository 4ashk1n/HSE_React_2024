type MyExclude<T, U> = T extends U ? undefined : T;
/*
 * 1. Для каждого типа T проверяем, передается ли он во втором передаваемом типе U
 * 2. Если да - возвращаем undefined, то есть исключаем его
 * 3. Если нет - оставляем его в перечислении
 */

// Example
type t = MyExclude<"a" | "b" | "c", "a">;
