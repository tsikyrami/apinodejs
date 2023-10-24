 function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInteger(value) {
    return Number.isInteger(value);
}

function isEmptyString(str) {
    return str.trim() === '';
}

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function calculateSum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj);