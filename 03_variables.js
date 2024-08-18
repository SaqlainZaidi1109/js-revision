const accountId = 1445533;
let accountName = "Saqlain Zaidi";
var accountPassword = "123456";
accountCity = "Karachi"

/*JavaScript includes certain constant keywords. The syntax is defined within the JavaScript engine, whether it's V8 or Node.js. 
For example, when the engine encounters console.log(), it knows to display output on the screen. Similarly, when it 
encounters var, let, or const, it understands that these keywords are used to assign values in memory.*/

//so memory name is "accoundID" and the value assigned to it is "1445533"

//const means that value assigned in it cannot be changed. Sometimes locking the value intentionally is better in programming
//lets check:
// accountId = 2 //not allowed
// console.log(accoundId);

accountName = "Saqlain Rizvi"
accountPassword= "654321"
accountCity = "Islamabad"
let accountState;
// console.log(accountName);
// console.log(accountPassword);

//instead of writing console.log() again and again we can just do this
console.table([accountId, accountName, accountPassword, accountCity, accountState])

/*When you declare a variable with let, you're essentially reserving space in memory to store a value, and that value can be changed later.
The same applies to var. So, what's the difference between them? And how is it possible for a variable like accountCity,
which wasn't declared with var or let, to be changed?
In JavaScript, you can declare constants using const, while let and var are used to declare variables. However, we generally avoid using var.
There used to be a problem in JS that it didn't know what was the scope.
{} -> this is scope
In initial days JS didnt work on the basis of scope. It didn't have control on block scope.
*/

/*
Prefer not to use var beacuse of its issue in block-scope and functional-scope
*/

//JS is such a safe laangugage that you can declare or reserve a memory of a variable without declaring it accountCity. Which is not appropiate.

//For example if you dont know the assigned value yet so do this : let accountState;
//variable without assigned value will be shown as undefined