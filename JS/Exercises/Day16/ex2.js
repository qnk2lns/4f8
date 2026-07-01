const text = "javascript là ngôn ngữ lập trình phổ biến javascript chạy trên trình duyệt và javascript cũng chạy trên server";

const getWords = (text) => text.split(" ");


const countWord = (text, word) => {
    const words = getWords(text);
    return words.reduce((count, currentWord) => currentWord === word ? count + 1 : count, 0);
};

const getUniqueWords = (text) => {
    const words = getWords(text);
    const uniqueWords = new Set(words);
    return Array.from(uniqueWords).sort();
}

const getTopWords = (text, n) => {
    const words = getWords(text);
    const wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;
    });
    return Object.entries(wordCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, n)
        .map((word) => ({
            word: word[0],
            count: word[1]
        }));
};

const highlight = (text, word) => {
    return text.replaceAll(word, `**${word}**`);
}

console.log(getWords(text));
console.log(countWord(text, "chạy"));
console.log(getUniqueWords(text));
console.log(getTopWords(text, 3));
console.log(highlight(text, "javascript"));