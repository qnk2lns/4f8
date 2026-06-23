const fs = require('fs');

const isPrime = (num) => {
    // Số nguyên tố phải lớn hơn 1
    if (num <= 1) return false;

    // Số 2 và 3 là số nguyên tố
    if (num <= 3) return true;

    // Loại biên các số chẵn lớn hơn 2 và các số chia hết cho 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Kiểm tra các số có dạng 6k +/- 1 từ 5 đến căn bậc hai của n
    let sqrtNum = Math.sqrt(num);
    for (let i = 5; i <= sqrtNum; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

const isDivisibleBy3n5 = (num) => {
    return (num % 3 === 0 && num % 5 === 0);
}

const printNumbersTriangle = (n) => {
    for (let i = 1; i <= n; i++) {
        let output = "";
        for (let j = 1; j <= i; j++) {
            if (isDivisibleBy3n5(j))
                output += `# `;
            else if (isPrime(j))
                output += `* `;
            else output += `${j} `;
        }
        console.log(output.trim());
        if (i % 2 === 0) console.log("-".repeat(i));
    }
}

// 1. In câu mời nhập
process.stdout.write("Nhập 1 số và nhấn Enter: ");

// 2. Tạo vùng bộ đệm để hứng ký tự khi bạn nhấn Enter
const buffer = Buffer.alloc(1024);
const bytesRead = fs.readSync(0, buffer, 0, 1024, null); // Nhấn Enter là kích hoạt ngay!

// 3. Chuyển kết quả thành số thực gán vào biến n
const n = parseFloat(buffer.toString('utf8', 0, bytesRead).trim());

printNumbersTriangle(n);

