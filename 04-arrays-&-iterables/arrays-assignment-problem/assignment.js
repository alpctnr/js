const numbers = [1, 5, 10.4, 9, 22, 22];
const filteredNumbers = numbers.filter(number => {
    return number > 5;
})
console.log('Numbers greater than 5  : ' + filteredNumbers);

const mappedNumbers = [];
mappedNumbers.push(numbers.map((number, currentIndex, numbers) => {
    const mappedNumber = {
        index: currentIndex,
        value: number
    };
    return mappedNumber;
}))
console.log(mappedNumbers);

const reducedNumber = numbers.reduce((previousValue, currentValue, currentIndex, numbers) => {
    return previousValue * currentValue;
})
console.log(reducedNumber);

function findMax(values) {
    return Math.max(...values);
}
console.log(findMax(numbers));


const numbersSet = new Set();
numbers.forEach(number => {
    numbersSet.add(number);
})
console.log(numbersSet);