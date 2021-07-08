function splitStringBySegmentLength(source, segmentLength) {
    if (!segmentLength || segmentLength < 1) throw new Error('Segment length must be defined and greater than/equal to 1')
    const target = [];
    for (
        const array = Array.from(source);
        array.length;
        target.push(array.splice(0,segmentLength).join('')));
    return target;
}

function dataToText(num) {
    const textArray = splitStringBySegmentLength(num, 2)
    let letters = ''
    textArray.forEach(number => {
        const parseNumber = number.toString()
        if(parseNumber.startsWith(0)) { parseNumber.replace(0, '') }
        letters = letters + String.fromCharCode(parseInt(parseNumber) + 97 - 1)
    })
    return letters
}

function textToData(text) {
    const textArray = splitStringBySegmentLength(text, 1)
    let parsedText = ''
    textArray.forEach(letter => {
        let parsedLetter = letter.charCodeAt(0) - 97 + 1
        if(parsedLetter.toString().length === 1) { parsedLetter = '0' + parsedLetter.toString() }
        parsedText = parsedText + parsedLetter
    })
    return parsedText
}

module.exports = {textToData, dataToText, splitStringBySegmentLength}