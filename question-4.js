// with split and reverse

function reverseWords(str) {
    return str.split(' ').map(words => words.split('').reverse().join('')).join(' ');
}

// without split and reverse

function reverseWordsWithoutSplit(str) {
    const words = [];
    let start = 0;
    let end = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            end = i;
            words.push(str.substring(start, end));
            start = i + 1;
        } else if (str.length - 1 === i) {
            words.push(str.substring(start, str.length));
        }
    }
    const reversedWords = [];
    for (let j = 0; j < words.length; j++) {
        let reversedWord = '';
        for (let k = words[j].length - 1; k >= 0; k--) {
            reversedWord += words[j][k];
        }
        reversedWords.push(reversedWord);
    }
    return reversedWords;
}