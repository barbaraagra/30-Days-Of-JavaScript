// Declaring different variables of different data types

let firstName = 'Asabeneh'    // first name of a person
let lastName = 'Yetayeh'      // last name of a person
let country = 'Finland'       // country
let city = 'Helsinki'         // capital city
let age = 100                 // age in years
let isMarried = true

// Declaring variables with number values

const gravity = 9.81         // earth gravity  in m/s2
const boilingPoint = 100     // water boiling point, temperature in oC
const PI = 3.14              // geometrical constant

// Variables can also be declaring in one line separated by comma

let name = 'Asabeneh',     //name of a person
  job = 'teacher',
  live = 'Finland'

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
    'Kenya',
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ];
  
  //Declare an empty array;//
  const arr = Array();
  //Declare an array with more than 5 number of elements
  const arrWithFive = [1, 2, 3, 4, 5, 6];
  //Find the length of your array
  const myLenght = arrWithFive.length
  console.log(myLenght);
  //Get the first item, the middle item and the last item of the array
  const getItem = countries[0];
  console.log(getItem);
  console.log(countries.length);
  console.log(`${countries[6]}, ${countries[10]}`);
  //Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5//
  const mixedDataTypes = [3, false, null, 9, undefined];
  console.log(mixedDataTypes.length);
  //Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
  let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM',' Oracle', 'Amazon'];
  //Print the array using console.log()//
  console.log(itCompanies);
  //Print the number of companies in the array
  console.log(itCompanies.length);
  //Print the first company, middle and last company
  console.log(`${itCompanies[0]}, ${itCompanies[3]}, ${itCompanies[6]}`);
  //Print out each company//
  
  //Change each company name to uppercase one by one and print them out
  //console.log(itCompanies.toUpperCase());
  //Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies
  //console.log(itCompanies.toString(' , '));
  //Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
  
  //if (itCompanies.includes('Apple')) return 'Apple'
  //if (inclCompanies){
     // return 'Apple'
      //} else {
        //return 'not found'
      //};
  //Filter out companies which have more than one 'o' without the filter method
  //Sort the array using sort() method
  console.log(itCompanies.sort());
  //Reverse the array using reverse() method
  console.log(itCompanies.reverse());
  //Slice out the first 3 companies from the array
  console.log(itCompanies.slice(0, 3));
  //Slice out the last 3 companies from the array
  console.log(itCompanies.slice(4, 7));
  //Slice out the middle IT company or companies from the array
  console.log(itCompanies.slice(2, 5));
  //Remove the first IT company from the array
  console.log(itCompanies.shift());
  //Remove the middle IT company or companies from the array
  console.log(itCompanies.splice(3, 4));
  //Remove the last IT company from the array
  console.log(itCompanies.pop());
  //Remove all IT companies
  console.log(itCompanies.splice());