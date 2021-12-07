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
let storedData = testData.slice(0,3) // Slice and take values between given range
storedData = testData.slice(3) // Slice from starting index and take all after given index
console.log(storedData);

// Concat => Combines array with given array
testData.concat([5,2,4]); 
console.log(testData);

// Search a value inside and retrieve index of,  last index of 
console.log(testData.indexOf(5));
console.log(testData.lastIndexOf(5));

// Finding stuff find() , findIndex()
const personData = [{ name: 'Bilal'}, { name: 'Atakan'}];
const bilal = personData.find((person, index, persons) => {
    return person
});
console.log(bilal.name);

// Return index number
const atakan = personData.findIndex((person, index, persons) => {
    return person.name === 'Atakan'
});
console.log(atakan);

// Is it included ?
console.log(testData.includes(5));
console.log(testData.indexOf(5) !== -1);

// Foreach
const prices = [10.99, 5.6, 3.99];
const tax = 0.9;
const taxAdjustedPrices = [];

prices.forEach((price , index, prices) => {
    taxAdjustedPrices.push(price * (1 + tax));
})

console.log(taxAdjustedPrices);

// Transform data with map
taxAdjustedPricesWithMap = prices.map((price, index, prices) => {
    const priceObj = { index: index, taxAdjPrice: price * (1 + tax)};
    return priceObj;
});
console.log(prices, taxAdjustedPricesWithMap);


// sort() and reverse()
const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0
    } else {
        return -1
    }
});
console.log(sortedPrices);
console.log(sortedPrices.reverse());

// Filter array with filter()
const filteredArray = prices.filter((price, index, prices) => {
    return price > 6;
});
console.log(filteredArray);

// Arrow function
const filteredArrayWithArrowFunction = prices.filter(p => p > 6);
console.log(filteredArrayWithArrowFunction);

// reduce()
const sum = prices.reduce((previousValue, currentValue, currentindex, prices) => {
    return previousValue + currentValue;
}, 0);
console.log(sum);

// split() nad join()
const dataToSplit = 'New York;10.1;200';
const splittedData = dataToSplit.split(';');
console.log(splittedData);

const nameFragements = ['Bilal', 'Cetiner'];
const name = nameFragements.join(' ');
console.log(name);

// Spread ... => export values
const copiedNameFragments = [...nameFragements]; // Creates new object, not taking reference values exported with ...
nameFragements.push('Mr');
console.log(nameFragements, copiedNameFragments);

console.log(Math.min(...sortedPrices));

// Sets
// Sets guaranties uniq values
// Sets does not include keys
const idsSet = new Set([1, 2, 3]);
idsSet.add(5);
console.log(idsSet);
console.log(idsSet.has(1));

for (entry of idsSet.entries()) {
    console.log(entry);
}

// Maps
// Maps has key value pairs
const person1 = {name: 'Bilal'};
const person2 = {name: 'Yenal'};

const person1Data = new Map([[person1, [{ age: 30}]]]);
console.log(person1Data.get(person1));
console.log(person1Data.has(person2));


// WeakSet()
const personToWeakSet = {name: 'Bilal'};
const personsToWeakSet = new WeakSet();
personsToWeakSet.add(personToWeakSet);
personToWeakSet = null; // Garbage collector works !
console.log(personsToWeakSet);


// WeakMap()
const personsToWeakMap = new WeakMap();
personsToWeakMap.set(personsToWeakMap, 'Extra Info');
personsToWeakMap = null; // Garbage collector works !
console.log(personsToWeakMap);