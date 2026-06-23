/**
 * 
 * **Object structure:**
 * - `name`: string
 * - `age`: number
 * - `email`: string
 * - `score`: number
 * - `role`: string - Default: 'guest'
 *  @param {{
 *   name: string,
 *   age: number,
 *   email: string,
 *   score: number,
 *   role: 'member' | 'admin' | string
 * }} user
 * @returns {{
 *   displayName: string,
 *   isAdult: boolean,
 *   hasEmail: boolean,
 *   role: string,
 *   status: string,
 *   canAccess: boolean
 * }}
 */
const classifyUser = (user) => {
    const isAdult = (Number(user?.age) || 0) >= 18;
    const role = user?.role?.toString().trim() || 'guest';
    const score = Number(user?.score) || 0;
    return {
        displayName: user.name || "Ẩn danh",
        isAdult,
        hasEmail: !!user.email?.toString().trim(),
        role,
        status: Number(score) >= 80 ? "VIP" : (Number(score) >= 50 ? "Normal" : "New"),
        canAccess: isAdult && role !== 'guest'
    }
}


console.log(classifyUser({ name: "An", age: 17, email: "", score: 0, role: null }))
console.log(classifyUser({ name: "Bình", age: 22, email: "binh@gmail.com", score: 85, role: "admin" }))
console.log(classifyUser({ name: "Chi", age: 20, email: "chi@gmail.com", score: 55, role: undefined }))
console.log(classifyUser({ name: "", age: 30, email: "", score: 80, role: "member" }))
console.log(classifyUser({ name: "Duy", age: 16, email: "duy@gmail.com", score: 90, role: "admin" }))