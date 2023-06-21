//alert('Welcome to 30DaysOfJavaScript')

//let number = prompt('Enter number:', 'number goes here')
//console.log(number)

//const agree = confirm('Are you sure you like to delete? ')
//console.log(agree) // result will be true or false based on what you click on the dialog box



//Exercises: Level 1

//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Bárbara'
let lastName = 'Mazur'
let country = 'Portugal'
let city = 'Lisbon'
let isMarried = true
let year = 2023
console.log(typeof firstName)
console.log(typeof isMarried)
console.log(typeof year)

//Check if type of '10' is equal to 10
console.log(typeof '10' === 10)

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10)

//Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
console.log(3 != 5)
console.log('' != 'stg')
console.log('2' == 2)
//Write three JavaScript statement which provide falsy value.
console.log(null == 0)
console.log('' === 0)
console.log(NaN == undefined)

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

//let trianguloA = prompt('Enter side a:', '5')
//let trianguloB = prompt('Enter side b:', '4')
//let trianguloC = prompt('Enter side c:', '3')
//console.log(trianguloA)
//console.log(trianguloB)
//console.log(trianguloC)

// Responder na minha cabeça e depois conferir com console.log
//4 > 3 true
console.log(4 > 3)

//4 >= 3 true
console.log(4 >= 3)

//4 < 3 false
console.log(4 < 3)

//4 <= 3 false
console.log(4 <= 3)

//4 == 4 true
console.log(4 == 4)

//4 === 4 true
console.log(4 === 4)

//4 != 4 false
console.log(4 != 4)

//4 !== 4 false
console.log(4 !== 4)

//4 != '4' false
console.log(4 != '4')

//4 == '4' false . true
console.log(4 == '4')

//4 === '4' true . false
console.log(4 === '4')

//Find the length of python and jargon and make a falsy comparison statement.
let py = 'python'
let ja = 'jargon'
console.log(py.length !== ja.length)

//demarcação
const hora = new Date()
console.log(`${hora.getHours()}:${hora.getMinutes()}`)

//4 > 3 && 10 < 12 true
console.log(4 > 3 && 10 < 12)
//74 > 3 && 10 > 12 false
console.log(74 > 3 && 10 > 12)
//4 > 3 || 10 < 12 true
console.log(4 > 3 || 10 < 12)
//4 > 3 || 10 > 12 true
console.log(4 > 3 || 10 > 12)
//!(4 > 3) false
console.log(!(4 > 3))
//!(4 < 3) true
console.log(!(4 < 3))
//!(false) true
console.log(!(false))
//!(4 > 3 && 10 < 12) false
console.log(!(4 > 3 && 10 < 12))
//!(4 > 3 && 10 > 12) false . true
console.log(!(4 > 3 && 10 > 12))
//!(4 === '4') true
console.log(!(4 === '4'))

//There is no 'on' in both dragon and python
let dra = 'dragon'
console.log(!(py.includes('on') && dra.includes('on')))


//Use the Date object to do the following activities
//What is the year today?
const ano = new Date()
console.log(ano.getFullYear())
//What is the month today as a number?
const mes = new Date()
console.log(mes.getMonth() + 1)
//What is the date today?
const now = new Date()
console.log(`${now.getDay()}/${now.getMonth()}/${now.getFullYear()}`)
//What is the day today as a number?
let today = now.getTime()
console.log(today)
//What is the hours now?
let horas = now.getHours()
console.log(horas)
//What is the minutes now?
let minutos = now.getMinutes()
console.log(minutos)
//Find out the numbers of seconds elapsed from January 1, 1970 to now.
let allSeconds = Date.now()
console.log(allSeconds)

//Exercises: Level 2
//Create a human readable time format using the Date time object
//YYYY-MM-DD HH:mm
console.log(`${ano.getFullYear()}-${mes.getMonth() + 1}-${now.getDay()} ${horas}:${minutos}`)
//DD-MM-YYYY HH:mm
console.log(`${now.getDay()}-${mes.getMonth() + 1}-${ano.getFullYear()} ${horas}:${minutos}`)
//DD/MM/YYYY HH:mm
console.log(`${now.getDay()}/${mes.getMonth() + 1}/${ano.getFullYear()} ${horas}:${minutos}`)