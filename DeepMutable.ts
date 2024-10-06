type DeepMutable<T> =
    T extends object ? { -readonly [P in keyof T]: DeepMutable<T[P]> } : T;

// Example
type ServerResponseType = {
    readonly data: {
        readonly ok: boolean;
        readonly text: string;
        readonly json: object;
    };
    error: string;
    status: number;
}

type MutableResponseType = DeepMutable<ServerResponseType>
let a: MutableResponseType = {
    data: {
        ok: false,
        text: "",
        json: {}
    },
    error: 'I do not have any idea what do u want',
    status: 404
}

a.data.text = "Ok, I do...";
