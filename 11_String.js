const name = "Saqlain"
const repoCount= 50

console.log(name + repoCount + " Value") //not recommeded by hitesh because its outdated

//modern version: string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
/*In JavaScript, interpolation is the process of inserting strings or values into an existing string for various purposes.
This functionality is useful because it enables you to create powerful and dynamic strings for your software*/

//you can add methods in it aswell like:
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)

//another way to declare string:
//this evoking the object just like the other way, but you can see the results different in the chromes console, type the code below in it
const gameName = new String('Saqlain-SZ')
gameName

console.log(gameName[0]) //accessing key-value pair
console.log(gameName.__proto__) //for accessing all the methods....better to access on chrome

//some methods shown down below
console.log(gameName.length)
console.log(gameName.toUpperCase())
//however this wont change our original string value because of stack memory being used.

console.log(gameName.charAt(2))//012
console.log(gameName.indexOf('q'))//this to check the position of the character

const newString=gameName.substring(0,4) //wont obey -ve value
console.log(newString)

const anotherString = gameName.slice(-10,4) //will obey negative value
console.log(anotherString)

const stringOne = "  Saqlain   "
console.log(stringOne)
console.log(stringOne.trim()) //will remove the extra spaces

const url = "https://saqlain.com/saqlain%20zaidi";
console.log(url.replace('%20','-'))

console.log(url.includes('saqlain'))
console.log(url.includes('saqlain1'))

//converting string into an array based on dash or any thing
const stringTwo = "Syed-Mohammad-Saqlain-Zaidi"
console.log(stringTwo.split("-"))