type DeepPartial<T> = {
    [P in keyof T] ?: T[P] extends object ? DeepPartial<T[P]> : T[P];
}

// Example
type ServerResponseType = {
    data: {
        ok: boolean;
        text: string;
        json: object;
    };
    error: string;
    status: number;
}

type PartialedResponseType = DeepPartial<ServerResponseType>
const a: PartialedResponseType = {
    data: {
        ok: false
    },
    error: 'I do not have any idea what do u want',
    status: 404
}

console.log(a)