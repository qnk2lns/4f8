const analyzeClass = (scores) => {
    let invalid_scores = [], valid_scores = [], excellent_scores = [], very_good_scores = [], good_scores = [], average_scores = [], poor_scores = [];
    scores.forEach((score) => {
        if (score < 0 || score > 10)
            invalid_scores.push(score);
        else {
            valid_scores.push(score);
            if (score >= 9) excellent_scores.push(score);
            else if (score >= 8) very_good_scores.push(score);
            else if (score >= 6.5) good_scores.push(score);
            else if (score >= 5) average_scores.push(score);
            else poor_scores.push(score);
        }
    })
    let rate;
    if (valid_scores.length === 0) rate = null;
    else if ((valid_scores.length / 2) < ([...good_scores, ...very_good_scores, ...excellent_scores].length))
        rate = `Lớp học tốt`;
    else if ((valid_scores.length / 2) < (poor_scores.length))
        rate = `Cần cải thiện`;
    else rate = `Lớp học ở mức ổn`;

    return {
        invalid_scores,
        valid_scores,
        excellent_scores,
        very_good_scores,
        good_scores,
        average_scores,
        poor_scores,
        max_score: valid_scores.length > 0
            ? Math.max(...valid_scores)
            : null,
        min_score: valid_scores.length > 0
            ? Math.min(...valid_scores)
            : null,
        average_score: valid_scores.length === 0 ? null : ((valid_scores?.reduce((sum, number) => sum + number, 0) ?? 0) / valid_scores.length).toFixed(2),
        rate
    }
}

const jsonResponseToFriendlyText = (results) => {
    let resultText = ''
    Object.keys(results).forEach(k => {
        let output;
        switch (k) {
            case 'invalid_scores':
                output = `● Số điểm không hợp lệ: ${results[k].length} - [${results[k]}]`;
                break;
            case 'valid_scores':
                output = `● Số học sinh hợp lệ: ${results[k].length} - [${results[k]}]`;
                break;
            case 'excellent_scores':
                output = `● Xuất sắc: ${results[k].length} - [${results[k]}]`;
                break;
            case 'very_good_scores':
                output = `● Giỏi: ${results[k].length} - [${results[k]}]`;
                break;
            case 'good_scores':
                output = `● Khá: ${results[k].length} - [${results[k]}]`;
                break;
            case 'average_scores':
                output = `● Trung bình: ${results[k].length} - [${results[k]}]`;
                break;
            case 'poor_scores':
                output = `● Yếu: ${results[k].length} - [${results[k]}]`;
                break;
            case 'max_score':
                output = `● Điểm cao nhất: ${results[k] ?? 'Không có dữ liệu'}`;
                break;
            case 'min_score':
                output = `● Điểm thấp nhất: ${results[k] ?? 'Không có dữ liệu'}`;
                break;
            case 'average_score':
                output = `● Điểm trung bình: ${results[k] ?? 'Không có dữ liệu'}`;
            case 'rate':
                output = `● Nhận xét: ${results[k] ?? 'Không có dữ liệu'}`;

        }
        resultText += (output + '\n')
    })
    return resultText;
}

const test1 = () => {
    const results = analyzeClass([9, 7, -2, 5.5, 10, 4, 11, 6.5, 8])
    console.log(jsonResponseToFriendlyText(results));
}

const test2 = () => {
    const results = analyzeClass([3, 2, 4.5, 1, 0])
    console.log(jsonResponseToFriendlyText(results));
}

const test3 = () => {
    const results = analyzeClass([9, 1, 7, 6, 5.5])
    console.log(jsonResponseToFriendlyText(results));
}

const test4 = () => {
    const results = analyzeClass([-5, 15, 100, -1])
    console.log(jsonResponseToFriendlyText(results));
}

const test5 = () => {
    const results = analyzeClass([])
    console.log(jsonResponseToFriendlyText(results));
}

test1()
console.log('-------------------------------------')
test2()
console.log('-------------------------------------')
test3()
console.log('-------------------------------------')
test4()
console.log('-------------------------------------')
test5()