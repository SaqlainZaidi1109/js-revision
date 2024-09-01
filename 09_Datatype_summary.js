//Interview perspective:

//in the official documentation, all the datatypes are divided in to two parts. Primitive and non-primitive
/*Primitive data types are immutable, meaning their values cannot be changed once assigned. 
Non-primitive data types are mutable and can be modified. Storage: Primitive data types are stored directly in memory,
whereas non-primitive data types are stored as references to their values in memory.*/

//Primitive:
// -> 7 Types: String, number, boolean, null, undefined, symbol, BigInt
//Primitive type are callback value

const score = 100
const scoreV = 100.4

const isLoggedIn =false;
const isLoggedOut =true;

let userEmail;
let userEmail1=undefined;

//both will have different values down below, even the value passed is same:
const id = Symbol("123")
const id1 = Symbol("123")

console.log(id===id1)

const bigNumber = 1111111111111111111n

//___________________________________________________________________________________________________________________________________________________________

//Reference type or Non-primitve type.
// -> Arrays, objects, functions

// Array:
const heros = ["Syed","Mohammad","Saqlain"]

// Objects:
{
    name:"Saqlain",
    // age:20
}; //can be stored in a variable

let myObj = {
    name:"Saqlain",
    age:20
};

//whole data in teh curly brackets is an object

//Function:
//function can be treated as a variable in JS
const myFunction = function(){
    console.log("Hello World")
}

//______________________________________________________________________________________________________
//Is JS dynamically type language or statically type language.
/*JavaScript is a dynamically typed language. This means that variable types are determined at runtime rather than at compile time. 
You don't need to declare the type of a variable when you create it; the type is automatically determined based on the value you assign to it.

let x = 10;      // x is a number
x = "Hello";     // now x is a string

In this example, the variable x is initially a number, but it can later be reassigned to a string without any issues.
The flexibility of dynamic typing allows variables to change types during execution, which is a hallmark of dynamically typed languages.
*/

//null means empty not 0


/*
Undefined -> undefined
Null -> object
Boolean -> Boolean
Number ->number
String-> string
Object -> object
function -> function/ object funciton

all non-primitive data types are functions
*/