// Exercises XP Ninja


// Exercise 1 : Age Difference

// 1. Given the years two people were born, find the date when the younger one is exactly half the age of the older.
let year1 = 1986
let year2 = 2003
let search // the year (date) to search
// Given the case, we have 
// search - year2 = (search - year1) / 2
// so: 
search = 2 * year2 - year1
console.log(`The date is ${search}`)


// Exercise 2 : Zip Codes
// Harder exercise

// Part 1 : without regex
// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
    // Zip codes consists of 5 numbers
    // Must only contain numbers
    // Must not contain any whitespace (spaces)
    // Must not be greater than 5 digits in length
let zipCode = prompt("Enter your zip code: ")
if (!isNaN(zipCode) && Number(zipCode) <= 99999 && zipCode.trim() == zipCode && zipCode.length == 5)
    console.log("success")
else
    console.log("error")

// Part 2 : with regex
// let zipCode = prompt("Enter your zip code: ")
let regex = /^(\d){5}$/
if (regex.test(zipCode))
    console.log("success")
else
    console.log("error")


// Exercise 3 : Secret Word
// Harder exercise
// 1. Prompt the user for a word and save it to a variable.
let word = prompt("Enter a word: ")
// 2. Delete all the vowels of the word and console.log the result.
console.log(word.replace(/[aeiouy]/ig, ''))
// Bonus: Replace the vowels with another character and console.log the result
let word2 = word.replace(/a/ig, '1')
                .replace(/e/ig, '2')
                .replace(/i/ig, '3')
                .replace(/o/ig, '4')
                .replace(/u/ig, '5')
console.log(word2)
