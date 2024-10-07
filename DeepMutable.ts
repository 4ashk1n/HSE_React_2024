type DeepMutable<T> =
    T extends object ? { -readonly [P in keyof T]: DeepMutable<T[P]> } : T;
/*
* 1. С помощью тернарника определяем, является ли передаваемый тип объектом
* 2. Если является, то запускаем рекурсивный вызов того же типа для каждого атрибута, удаляя метку readonly
* 3. Если дошли до "листа", то есть подтип, который не является объектом - просто сохраняем этот тип и выходим из рекурсии обратно
*/

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
