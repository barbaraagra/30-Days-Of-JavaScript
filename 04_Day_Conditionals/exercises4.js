let isRaining = false
if (isRaining) {
    console.log('Remember to take your rain coat.')
}

let isRainingNow = true
isRainingNow
    ? console.log('You need a rain coat.')
    : console.log('No need for a rain coat.')

//let age = prompt('Enter your age:')
//if (age > 18) {
//console.log('You are old enough to drive.')
//} else {
//console.log('You are left with 3 years to drive.')
//}

let myAge = prompt('Enter my age:')
let yourAge = prompt('Enter your age:')
if (myAge < yourAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`)
} else if (myAge > yourAge) {
    console.log(`You are ${myAge - yourAge} years younger than me.`)
} else {
    console.log('Enter a valid number')
}