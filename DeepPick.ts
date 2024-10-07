type DeepPick<T, Paths extends string> =
    Paths extends `${infer Key}.${infer Rest}` ?
        Key extends keyof T ?  { [K in Key]: DeepPick<T[K], Rest> }: never
    : Paths extends keyof T ? { [K in Paths]: T[K] }: never;
/*
 * 1. С помощью infer пытаемся разделить строку на название родительского атрибута и остальной текст
 * 2. Если получилось - вызываем рекурсивный вызов от остального текста
 * 3. Если не получилось - значит, дошли до нужного поля и добавляем его в тип
 */

type LockedType = {
    readonly id: string;
    readonly name: {
        surname: string;
        firstname: string;
    };
    roles?: number[]
}

type nameAndRoles = DeepPick<LockedType, 'name.firstname'|'roles'>;

const a: nameAndRoles = {name: {firstname: "abc"}, roles: [1, 2]};