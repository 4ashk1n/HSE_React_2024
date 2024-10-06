type DeepPick<T, Paths extends string> =
    Paths extends `${infer Key}.${infer Rest}` ?
        Key extends keyof T ?  { [K in Key]: DeepPick<T[K], Rest> }: never
    : Paths extends keyof T ? { [K in Paths]: T[K] }: never;

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