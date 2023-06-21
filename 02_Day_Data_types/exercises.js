//STRING METHODS

//1. length - returns the number of characters of a string including empty spaces
let js = 'JavaScript'
console.log(js.length)

//2. acessing characters using index
let string = 'JavaScript'
let firstLetter = string[0]
console.log(firstLetter)

let lastIndex = string.length - 1
console.log(lastIndex)

//3. toUpperCase(): this method changes the string to uppercase letters
console.log(string.toUpperCase())

//4. toLowerCase(): this method changes the string to lowercase letters.
console.log(string.toLowerCase())

//5. substr(): It takes two arguments, the starting index and number of characters to slice.
console.log(string.substr(4, 6))

//6. substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
console.log(string.substring(0, 4))

//7. split(): splits a string at a specified place
let stringFrase = '30 Days Of JavaScript'
console.log(stringFrase.split(''))
console.log(stringFrase.split(' '))
console.log(stringFrase.split(', '))

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(''))
console.log(countries.split(', '))
console.log(countries.split(','))

//8. trim(): Removes trailing space in the beginning or the end of a string.
let stringTrim = '   30 Days Of JavaScript   '
console.log(stringTrim.trim(''))

//9. includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
let cities = 'Rome, Paris, Rio, Madrid, LA'
console.log(cities.includes('Rio'))
console.log(cities.toLowerCase().includes('la'))

//10. replace(): takes as a parameter the old substring and a new substring. string.replace(oldsubstring, newsubstring)
let stringThree = '30 Days Of JavaScript'
console.log(stringThree.replace('JavaScript', 'Python')) // 30 Days Of Python

let country = 'Finland'
console.log(country.replace('Fin', 'Noman'))       // Nomanland

//11. charAt(): Takes index and it returns the value at that index. Escreve o index e recebe o que é este index.
console.log(country.charAt(0))

//12. indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(stringThree.indexOf('Days'))       // 3
console.log(stringThree.indexOf('days'))       // -1
console.log(stringThree.indexOf('a'))          // 4
console.log(stringThree.indexOf('JavaScript')) // 11
console.log(stringThree.indexOf('Script'))     //15
console.log(stringThree.indexOf('script'))     // -1

//13. lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
let loveJS = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(loveJS.lastIndexOf('you'))

//14. concat(): It takes many strings as substrings and joins them. concat(substring, substring, substring)
let newExample = 'Me'
console.log(newExample.concat('learning', 'JavaScript', 'again'))

//15. startsWith(): it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
console.log(newExample.startsWith('Me'))
console.log(loveJS.startsWith('love'))

//16. endsWith(): it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// Any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// Expected output: 43

console.log(paragraph[paragraph.search(regex)]);
// Expected output: "."

//17. repeat(): it takes a number as argument and it returns the repeated version of the string.
let love = 'love'
console.log(love.repeat(4))

//EXERCÍCIOS
//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'
//Print the string on the browser console using console.log()
console.log(challenge)
//Print the length of the string on the browser console using console.log()
console.log(challenge.length)
//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase())
//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase())
//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 1))
//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3, 21))
//Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'))
//Split the string into an array using split() method
console.log(challenge.split(', '))
//Split the string 30 Days Of JavaScript at the space using split() method
//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(', '))
//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('JavaScript', 'Phython'))
//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))
//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('J'))
//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'))
//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'))
//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let trimFrase = ' 30 Days Of JavaScript '
console.log(trimFrase.trim(' '))
//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'))
//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'))
//Use match() method to find all the a’s in 30 Days Of JavaScript
//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let daysJS = '30'
console.log(daysJS.concat('Days', 'Of', 'JavaScript'))
//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))

//Exercise: Level 2
//1. Using console.log() print out the following statement:
let fraseUm = 'There is no exercise better for the heart than reaching down and lifting people up.'
console.log(fraseUm)
console.log(`The quote '${fraseUm}' by John Holmes teaches us to help one another.`)

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof 10 === '10')
let num = '10'
let numInt = Number(num)
console.log(num)
console.log(numInt)

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let numOne = '9.81'
let numFloat = parseFloat(numOne)
console.log(numFloat) // 9.81
console.log(parseInt(numFloat))

//Check if 'on' is found in both python and jargon
let langPy = 'python'
let langJar = 'jargon'
console.log(langPy.includes('on') && langJar.includes('on'))

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let secondSentence = 'I hope this course is not full of jargon.'
console.log(secondSentence.includes('jargon'))

//Generate a random number between 0 and 100 inclusively.
let ranNum = Math.floor(Math.random() * 100)
console.log(ranNum)

//Generate a random number between 50 and 100 inclusively.
let max = 100
let min = 50
let randomNum = Math.floor(Math.random() * (max - min + 1))
console.log(randomNum)
//Generate a random number between 0 and 255 inclusively.
let otherRanNum = Math.floor(Math.random() * 255)
console.log(otherRanNum)

//Access the 'JavaScript' string characters using a random number.

//Use console.log() and escape characters to print the following pattern.

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let beCause = 'You cannot end a sentence with because because because is a conjunction'
console.log(beCause.indexOf('because'))
console.log(beCause.lastIndexOf('because'))
console.log(beCause.slice(31, 54))
console.log(beCause.substr(31, 23))

//Exercises: Level 3
//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let frase = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let fraseLov = frase.match('love')
console.log(fraseLov)
