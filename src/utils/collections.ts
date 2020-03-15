export function arrayToObject<T, U>(
    array: T[],
    keyMapper: (el: T) => string,
    valueMapper: (el: T) => U
): { [key: string]: U } {
    let ob: { [key: string]: U } = {}
    for (const el of array) {
        ob[keyMapper(el)] = valueMapper(el)
    }
    return ob
}
