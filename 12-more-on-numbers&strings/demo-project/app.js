function randomIntBetween(min, max) {
    // Math.random is between 0 and 1
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntBetween(1, 10));

function productDescription(strings, productName, productPrice) {
    console.log(strings)
    console.log(productName)
    console.log(productPrice)
    let priceCategory = 'prety cheap regarding its price';
    if (productPrice > 20) {
        priceCategory = 'fairly priced'
    }

    return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`;
}

const prodName = 'Java Script Course'
const prodPrice = 29.99

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}`;
console.log(productOutput);

// Regular Expression
const regex1 = /(H)ello/;
console.log(regex1.test('Hello')) // true
console.log(regex1.test('hello')) // false

const regex2 = /.ello/;
console.log(regex1.test('hello')) // true
console.log(regex1.test('ello')) // false

const regexEmail = /^\S+@\S+\.\S+$/
console.log(regexEmail.test('bcetiner@msn.com')); // True