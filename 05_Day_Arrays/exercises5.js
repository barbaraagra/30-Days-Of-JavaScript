let stringArray = ['a', 'b', 'c'];
const newLength = stringArray.length - 1;
console.log(newLength)
const oneStrArr = stringArray[0];
const twoStrArr = stringArray[1];
const threeStrArr = stringArray[2];
console.log(`${oneStrArr}, ${twoStrArr}, ${threeStrArr}`);

let motorcycle = {
    brand: 'Yamaha',
    model: 'Tracer',
    hp: 54
}
console.log(motorcycle.hp)

let motorcycleArr = ['Yamaha', 'Tracer', '54']

var cat = {};

function objArrayGenerator(namesArray) {
    var catArr = [
        {
            name: cat[0],
            age: cat.Math.floor(Math.random() * 20)
        },
        {
            name: 'koala',
            age: cat.Math.floor(Math.random() * 20)
        },
        {
            name: 'tareco',
            age: cat.Math.floor(Math.random() * 20)
        }
    ]
};


function powerOfNum(num) {
    return Math.pow(num, 2)
}
console.log(powerOfNum(3))

//function allComb(word){
//for (let j=0, j < word.length; j++){
// let wordLoop = word[j];
// return wordLoop.split('')
//}
//}
//console.log(allComb('dog'))

//Exercises
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

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

//Declare an empty array;
const emptyArr = Array();
//Declare an array with more than 5 number of elements
const numArr = [1, 2, 3, 4, 5]
//Find the length of your array
console.log(numArr.length)
//Get the first item, the middle item and the last item of the array
console.log(`${numArr[0]}, ${numArr[2]}, ${numArr[4]}`)
//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['Shakira', 33, true, { occupation: 'singer' }, 2];
console.log(mixedDataTypes.length)
//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//Print the array using console.log()
console.log(itCompanies)
//Print the number of companies in the array
console.log(itCompanies.length)
//Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])
//Print out each company
const sepCompanies = itCompanies.toString()
console.log(sepCompanies)

//Change each company name to uppercase one by one and print them out
console.log(sepCompanies.toUpperCase())

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(`${sepCompanies} are bit IT companies.`)

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let chekingComp = itCompanies.indexOf('Apple')

if (chekingComp === -1) {
    console.log('This company is not found.')
} else {
    console.log('Apple')
}

//Filter out companies which have more than one 'o' without the filter method


//Sort the array using sort() method
console.log(itCompanies.sort())

//Reverse the array using reverse() method
console.log(itCompanies.reverse())

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

//Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 7))

//Slice out the middle IT company or companies from the array
console.log(itCompanies.splice(3, 1))

//Remove the first IT company from the array
console.log(itCompanies.splice(0, 1))
//Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3, 1))
//Remove the last IT company from the array
console.log(itCompanies.splice(6, 1))
//Remove all IT companies
console.log(itCompanies.splice())
