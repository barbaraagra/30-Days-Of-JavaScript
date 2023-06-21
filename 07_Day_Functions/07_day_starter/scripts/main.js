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

//Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (r, π = 3.14) => π * r * r;
console.log(areaOfCircle(2));

//Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (r, π = 3.14) => 2 * π * r;
console.log(circumOfCircle(6));

//Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const densityOfSub = (mass, vol) => mass / vol;
console.log(densityOfSub(10, 20))

//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speedObj = (dist, time) => dist / time;
console.log(`${speedObj(400, 10)}km/h`);

//Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const calWeigth = (mass, gravity = 9.81) => mass * gravity;
console.log(calWeigth(100));

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const celToFar = (celsius) => (celsius * 9 / 5) + 32;
console.log(celToFar(40));

//Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.