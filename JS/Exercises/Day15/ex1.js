/**
 * @param {number} a - Number
 * @param {number} b - Number
 * @param {number} c - Number
 * @returns {string}
 */
const classifyTriangle = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0)
        return "Cạnh không hợp lệ";

    if (!((Math.abs(a - c) < b) && (b < (a + c))))
        return "Không tạo thành tam giác";

    if (a === b && b === c)
        return "Tam giác đều";

    if (a === b || b === c || a === c)
        return "Tam giác cân";

    let a2 = a * a;
    let b2 = b * b;
    let c2 = c * c;

    if (a2 + b2 === c2 || a2 + c2 === b2 || b2 + c2 === a2)
        return "Tam giác vuông";

    return "Tam giác thường";
}

console.log([
    classifyTriangle(3, 4, 5),
    classifyTriangle(2, 2, 2),
    classifyTriangle(1, 2, 10)
])