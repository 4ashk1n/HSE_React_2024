type DeepPartial<T> = {
    [P in keyof T] ?: T[P] extends object ? DeepPartial<T[P]> : T[P];
}
/*
 * 1. С помощью тернарника проверяем, является ли данный атрибут объектом, при этом добавляем ? - оператор для "необязательных" полей
 * 2. Если является объектом - вызываем рекурсию для каждого атрибута
 * 3. Если не является - оставляем текущий тип
 */

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