/**
 * @param {any} obj - Any object
 * @returns {{
 *   input: any,
 *   type: string,
 *   isTruthy: boolean,
 *   isNullOrUndefined: boolean,
 *   isReferenceType: boolean
 * }}
 */
const analyzeValue = (obj) => {
    const type = typeof obj
    return {
        input: obj,
        type,
        isTruthy: !!type,
        isNullOrUndefined: (obj === null || obj === undefined),
        isReferenceType: (obj !== null && type === 'object') || type === 'function'
    }
}

console.log([analyzeValue(null),
    analyzeValue(undefined),
    analyzeValue(0),
    analyzeValue("hello"),
    analyzeValue([1, 2, 3]),
    analyzeValue({}),
    analyzeValue(function () { }),
    analyzeValue(NaN)])
