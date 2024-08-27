let score = 33

// const {score} = req.body; //In line number one you know the datatype is number, but there is no gurantee of data type in line number three.

console.log(typeof score);
console.log(typeof (score));

/* result:
number
number
*/

let score1 = "33"

console.log(typeof score1);
console.log(typeof (score1));

/* result:
string
string
*/

//----------->for converting it into a number:
let valueInNumber = Number(score1)  //most of the datatype has this capital format
console.log(typeof valueInNumber);
console.log(typeof (valueInNumber)); //guranteed converted into number

let score2 = "33abc"
let valueInNumber1 = Number(score2)  
console.log(typeof valueInNumber1); //datatype: number
console.log(valueInNumber1) //result NaN = Not a number

let score3 = null
let valueInNumber3 = Number(score3)  
console.log(typeof valueInNumber3); //datatype: number
console.log(valueInNumber3) //result: 0

//for undefined it will show NaN aswell
let score4 = true
let valueInNumber4 = Number(score4)  
console.log(typeof valueInNumber4); //datatype: number
console.log(valueInNumber4) //result: 1

//O for false
//NaN for a string

//"33" => 33
//"33abc" = > NaN
//true => 1; false => 0

//--------------------------------------------------------------------------------------------------------------

let isLoggedIn = 1;
let isLoggedOut = 0;
let booleanIsLoggedIn = Boolean(isLoggedIn) 
let booleanIsLoggedOut = Boolean(isLoggedOut)
console.log(booleanIsLoggedIn) //true
console.log(booleanIsLoggedOut) //false

//---------------------------------------------------------------------------------------------------------------


let isLoggedIn1 = "abc";
let isLoggedOut1 = "";
let booleanIsLoggedIn1 = Boolean(isLoggedIn1) 
let booleanIsLoggedOut1 = Boolean(isLoggedOut1)
console.log(booleanIsLoggedIn1) //true
console.log(booleanIsLoggedOut1) //false

// 1 => true ; 0 => false ; "abc" => true ; "" => false   --- in boolean

//---------------------------------------------------------------------------------------------------------------

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber) //result: 33
console.log(typeof stringNumber) //String