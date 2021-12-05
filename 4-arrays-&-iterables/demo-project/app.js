const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(5, 2);
console.log(moreNumbers);

const yetMoreNumbers = Array.of(1);
console.log(yetMoreNumbers);

// Array from any iterable
const listItems = document.querySelectorAll('li');
const arrayFrom = Array.from(listItems);
console.log(arrayFrom);

const personalData = [30, 'Bilal', {moreDetails: []}];

// Nested array
const analyticsData = [[1, 1.6], [-5, 3, 2]];
for(const data of analyticsData){
    for(const dataPoint of data){
        console.log(dataPoint);
    }
}

// Push, Unshift
const hobbies = ['Sports', 'Cooking'];

// Insert item at the end.
hobbies.push('Reading');

// Insert item at the beginning.
hobbies.unshift('Coding');

// Get last value from last index and remove from array.
const poppedValue = hobbies.pop();
console.log(poppedValue);

console.log(hobbies);


// Splice => specify from and to indexes to remove items from array.
hobbies.splice(1, 1);
hobbies.splice(1); // Remove all from starting point
console.log(hobbies);

//Slice
const testData = [1, 5, 1.2, 5, -2];
let storedResult = testData.slice(0,3) // Slice and take values between given range
storedResult = testData.slice(3) // Slice from starting index and take all after given index
console.log(storedResult);