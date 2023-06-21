//Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
    console.log(i)
}

let j = 0;
while (j <= 10) {
    console.log(j)
    j++
}

let k = 0;
do {
    console.log(k);
    k++
} while (k <= 10)

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
    console.log(i)
}

let x = 10;
while (x >= 0) {
    console.log(x)
    x--
}

let z = 10;
do {
    console.log(z);
    z--
} while (z >= 0)

//Iterate 0 to n using for loop
let n = 5
for (let i = 0; i <= n; i++) {
    console.log(i)
}

//Write a loop that makes the following pattern using console.log():
let num = 6;
for (let i = 0; i <= num; i++) {
    let each = '';
    for (let j = 0; j <= i; j++) {
        each += '#';
    }
    console.log(each);
}

//Use loop to print the following pattern:
let count = 0;
for (let i = 0; i <= 10; i++) {
    count += i
    console.log(`${i} * ${i} = ${i * i}`)
}

//Using loop print the following pattern
let newNum = [];
let otherNum = [];
for (let i = 0; i <= 10; i++) {
    newNum.push(i ** 2)
    otherNum.push(i ** 3)
}
console.log(newNum)
console.log(otherNum)

//Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i = i + 2)
    console.log(i)

//Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 1; i <= 100; i = i + 2)
    console.log(i)

//Use for loop to iterate from 0 to 100 and print only prime numbers

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumAll = 0
for (let i = 0; i <= 100; i++) {
    sumAll += i
}
console.log(sumAll)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}
console.log(sumEven);
console.log(sumOdd);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
console.log([`${sumEven}, ${sumOdd}`]);

//Develop a small script which generate array of 5 random numbers
let arrRan = Array();
for (let i = 0; i < 5; i++) {
    let arrRandom = Math.floor(Math.random() * 100);
    arrRan.push(arrRandom)
}
console.log(arrRan);

//Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arrS = [];
for (let i = 0; i < 5; i++) {
    let otherArr = Math.floor(Math.random() * 100)
    arrS.push(otherArr)
    if (i == i) {
        continue
    }
}
console.log(arrS);

//Develop a small script which generate a six characters random id:
let id = '';
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//console.log(characters.length)
for (let i = 0; i < 6; i++) {
    let indexChar = Math.floor(Math.random() * characters.length);
    id += characters.charAt(indexChar)
}
console.log(id)
//Exercises: Level 2
//Develop a small script which generate any number of characters random id:
let idTwo = ''
let qntsIndex = Math.floor(Math.random() * characters.length)

for (let i = 0; i < qntsIndex; i++) {
    let indexCharTwo = Math.floor(Math.random() * characters.length);
    idTwo += characters.charAt(indexCharTwo)
}
console.log(idTwo)

//Write a script which generates a random hexadecimal number.
let hexaNum = ''
let hexaDeci = '0123456789abcdef'
for (let i = 0; i < 6; i++) {
    let hexaIndex = Math.floor(Math.random() * hexaDeci.length)
    hexaNum += hexaDeci.charAt(hexaIndex)
}
console.log(`#${hexaNum}`)

//Write a script which generates a random rgb color number.
//rgb(240,180,80)
let colorOne = 0;
let colorTwo = 0;
let colorThree = 0;
for (let i = 0; i <= 3; i++) {
    let numColorOne = Math.floor(Math.random() * 255)
    colorOne += numColorOne
    let numColorTwo = Math.floor(Math.random() * 255)
    colorTwo += numColorTwo
    let numColorThree = Math.floor(Math.random() * 255)
    colorThree += numColorThree
}
console.log(`rgb(${colorOne},${colorTwo},${colorThree})`)

//Using the above countries array, create the following new array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
let newCountries = [];
for (let i = 0; i < countries.length; i++) {
    newCountries.push(countries[i].toUpperCase());
}
console.log(newCountries)
