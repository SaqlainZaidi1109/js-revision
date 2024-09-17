//numbers
const score = 400 //this is defined as number
// console.log(score) //400
//but to explicitly define it as a number:
const balance=new Number(100)
// console.log(balance) // [Number: 100]

//400 is automatically defined as a number and here [Number: 100] it is specifically casting as a number. Thats a small difference.

// console.log(balance.toString().length) //since balance is converted into string you can use string functions aswell like .lenght()
// console.log(balance.toFixed(2))
// console.log(balance.toFixed(1))
//you will use toFixed alot especially in ecommerce because when you go calculation of things like gst and etc, precision value gets larger and client normally dont wanna see that big of a number so we always use toFixed()

const otherNumber = 23.2984
const otherNumber1 = 123.9984
const otherNumber2 = 1123.9984
// console.log(otherNumber.toPrecision(3))
// console.log(otherNumber1.toPrecision(3))
// console.log(otherNumber2.toPrecision(3)) //BE CAREFUL

const hunderds = 1000000
// console.log(hunderds.toLocaleString()) //will put comma's according to USD standards but as default since it can be changed.
// console.log(hunderds.toLocaleString("en-IN")) //indian 

// console.log(Math) //do it on inspect
// console.log(Math.abs(-4)) //will turn negative into positive, but positive will stay positive
// console.log(Math.round(4.3)) //will round it off
// console.log(Math.round(4.6)) //will round it off
// console.log(Math.ceil(4.2)) //will choose the upper value to round it off with
// console.log(Math.floor(4.9)) //will choose the lower value to round it off with
// console.log(Math.min(4,3,2,5,1))
// console.log(Math.max(4,3,2,5,1))

console.log(Math.random()) //this line will give you different values each time its run inbetween 0-1
console.log(Math.random()*10) //this line will give you different values each time its run inbetween 0-10
console.log(Math.random()*10+1) //this line will give you different values each time its run inbetween 1-10, this will gurantee that minimum value will be 1
//but clg(Math.random()*10+1) will create alot of problems because of bodmas so better do this:
console.log((Math.random()*10)+1) //now we know the values will be confirmed and whats happening first.
console.log(Math.floor((Math.random()*10)+1)) //to get the lower round off value, now result wont be in decimal

const min =10
const max =20

console.log(Math.floor(Math.random()*(max-min+1))+min)
/*in the code above you will get the random numbers in between 10 and 20, rounded off and you wont get a number less than 10*/
/*In line 45, Math.random() will provide random values inbetwee 0-1 so we multiplied it by 10 and shifted the decimal number.
Later added 1 so we wont get value of 0
Then wrapped it whole with Math.floor() to avoid decimal value and get lower value.
Then added 10 in it to gurantee to get atleast 10*/