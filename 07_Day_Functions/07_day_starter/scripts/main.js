console.log(countries)
alert('Open the console and check if the countries has been loaded')

//Declare a function fullName and it print out your full name.
//Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName('Bárbara', 'Agra'));

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(addNumbers(1, 2));

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(10, 5))

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(len, wid) {
    return (len + wid) * 2
}
console.log(perimeterOfRectangle(1, 2));

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (leng, widt, heig) => leng * widt * heig;
console.log(volumeOfRectPrism(4, 2, 3));