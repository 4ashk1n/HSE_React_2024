// Realization of Pick<> from TS
type MyPick <T,K extends keyof T> = {
    [P in K]: T[P]
}


// Example
type LockedType = {
    readonly id: string;
    readonly name: string;
    roles?: number[]
}

type nameAndRoles = MyPick<LockedType, 'name'|'roles'>;

const a: nameAndRoles = {name: "abc", roles: [1, 2]};

