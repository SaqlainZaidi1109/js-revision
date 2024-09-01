// ************************Operations************************
let value = 3
let negValue = -value;
// console.log(negValue) //result -3

//Basic maths operations
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**4) //power
// console.log(2/3)
// console.log(2%3) //remainder or modulus

let str1 = "Hello"
let str2 = " Saqlain"
let str3 = str1+str2 //strings can be added
console.log(str3)  // result Hello Saqlain

//These conversion belows follow some ecmascript guidelines
console.log("1" +2); //output: 12
console.log(1 + "2"); //output: 12
console.log("1" + "2"); //output: 12
console.log("1" + 2 + 2); //output: 122
console.log(1 + 2 + "2"); //output: 32

console.log(+true) //output: 1
console.log(+"") //output: 0

//precedence operator
//prefix
let gameCounter = 105
++gameCounter
console.log(gameCounter)

//postfix
let gameCounte1r = 102
gameCounte1r++
console.log(gameCounte1r)

//The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.