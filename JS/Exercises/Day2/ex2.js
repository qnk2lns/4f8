/**
 * @param {number} level - Number > 0
 * @param {number} kills - Number > 0
 * @param {boolean} boosted - Optional | Default: false
 * @returns {{finalScore: number, isBoosted: boolean}}
 */
const calculateScore = (level, kills, boosted = false) => {
    if (typeof level !== "number" || typeof kills !== "number" || level < 0 || kills < 0)
        return "Dữ liệu không hợp lệ";

    const isBoosted = boosted === true;

    let baseScore = kills * 10
    let bonusScore = level >= 5 ? baseScore * 0.5 : baseScore * 0.2
    let finalScore = isBoosted ? (baseScore + bonusScore) * 2 : baseScore + bonusScore

    return {
        finalScore: Math.floor(finalScore),
        isBoosted
    }
}

console.log([calculateScore(5, 20, true),
    calculateScore(3, 10, false),
    calculateScore(5, 15, false),
    calculateScore(1, 50, true),
])

console.log([calculateScore(-1, 10, true),
    calculateScore(2, -5, false),
    calculateScore("abc", 10, true),
    calculateScore(2, "abc", false)])

console.log([calculateScore(5, 15, null),
    calculateScore(5, 15, "yes"),
    calculateScore(5, 15, undefined)])