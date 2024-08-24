// #5 - Datatypes and ECMA standards
// there were not modules, classes, arrow function in previous Javascript. Already lots of code is written in old JS.
//

"use strict"; //this will treat your code as newer version of JS
//you cant do use no strict, cause after writing two words above your whole JS code will be implied through newer standards.
//however new engines are so advanced you might not even need to write use strict since they already use it and apply newer standards
//JavaScript engine is hidden inside the browser.

// alert(3+3) //we are using nodejs not browser. You will need .html file to make it run or add this command inside the console

//console.log("Saqlain") console.log("Zaidi") //this wont work
//console.log("Saqlain"); console.log("Zaidi") //this will work, however this is not the best practice since the code should be readable.

//this is readable and preferred:
console.log("Saqlain") 
console.log("Zaidi")

//orginal Js document is on tc39.es (ecmascript). Other one is by mozilla firefox
/*when JS was new market, everyone had different standards, different browsers different standards,
 but later they came up with EcmaScript organization that will be the one to set the standards
 ->standards contain priority algorithms, what will give which outcomes. These standards are for browsers and engines but also very useful for the
   developer.
 
 Mdn is introduced by Mozilla  
 */

 //_______________________________

 //Datatypes:
 let name = "Saqlain" //so this is string datatype
 let age = 18 //number
 let isLoggedIn = false //bolean

 //number => 2 to the power of 53
 //bigint //for bigger number
 //string
 //bolean => true/false
 //null => it is a standalone value aswell other than datatype
 //undefined => when value is not defined.
 /* Undefined means that the variable is declared but the value is not assigned. Null is the representation of an empty value let state=null
 For example, if you send a request to a server asking for the temperature, and the server returns 0, that value will be interpreted as a 
 valid temperature. In this case, you would need to use null to indicate the absence of data
 */
//symbol => this is pretty unique and will learn more about it in react. It helps to find the uniqueness inbetween individual components.

//primitive datatype:
//object
console.log(typeof age)
console.log(typeof null) //null will given as object
console.log(typeof undefined)//undefined will given as undefined

//Assignment: Read the specification is tc39.es