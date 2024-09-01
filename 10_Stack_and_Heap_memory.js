//Two types of memory in JS
//1. Stack memory, 2. Heap memory

//Where do we use both
// -> we use Stack with all the primitive type.
// -> With non-primitve type heap memory is used.

//Whenever stack memory is used. It means whatever variable you have used, you get a copy of it. 
//Chatgpt: When stack memory is used, a copy of the variable is made if passed by value

let name = "Saqlain"
let fullname ="Saqlain"
fullname = "Saqlain Zaidi"
console.log(name) //Saqlain
console.log(fullname)  //Saqlain Zaidi

/* So, as you can see from the explanation above, the original value "Saqlain" didn't change. 
Even though the intention was to change the variable "name" by setting it to `"full name = 'Saqlain Zaidi'"`, 
the original value remained the same because only a copy was provided.*/

//When a memory is defined in heap, you get reference of the orginal value from it.
//Chatgpt: When memory is allocated in the heap, you get a reference to the value stored there.

let userOne = {
    email: "user@gmail.com",
    upi:"user@buyl"
}

let userTwo = userOne;
userTwo.email = "userTwo@gmail.com"

console.log(userOne.email) //userTwo@gmail.com
console.log(userTwo.email) //userTwo@gmail.com

//So as you can see the orginal value has changed.