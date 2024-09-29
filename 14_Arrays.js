//Arrays
//array contains square bracket
//its an object
//datatype that contains mutiple variable 
//JS arrays are resizeable
//Indexing starts from 0
//JS array-copy operation creates shallow copies.

/*Shallow copy of an object is a copy whose properties share the same references (point to the underlying value) as those of the source object
from which copy was made. Deep copy of an object is a copy whose properties does not share the same references (point to the underlying value) as 
those of the source object from which copy was made.
*/ 

// const arr = [1,2,3,4,5,6,true,"Saqlain"] // totally okay and normal

const arr = [0,1,2,3,4,5]
// console.log(arr[0])

const myHeros = ["Ironman", "Superman"]

//another way to decloare array
const myArr2 = new Array(1,2,3,4)

//declare array in console so you can get a prototype

// //----------Array methods
// arr.push(6) //this adds a value in array
// arr.push(7) //this adds a value in array
// arr.pop()//no arguement required, it will remove the last value from the array.

// arr.unshift(9) //will add 9 at the start of an array
//now issue with this is that all of the arrays value have to be shifted because og this 

// arr.shift() //wont require any arguement, but will remove the first value from the array
// console.log(arr)

//questionnaire methods, will answer in ture or false
// console.log(arr.includes(9))
/* crucial is that you know what is the datatype of the outcome for e.g outcome is boolean for te include()*/
// console.log(arr.indexOf(9)) //value that are not in arrays will give outcome of -1
// console.log(arr.indexOf(3)) //will give you the index of 3

const newArr = arr.join()
// console.log(arr)
// console.log(newArr)
// console.log(typeof newArr)
/* values will remain the same but the datatype will be changed into string.*/

//------slice, splice

//slice returns a copy of section of an array
const Narr = [0,1,2,3,4,5]
console.log("Orginal Array ",Narr)
const arr1 = Narr.slice(1,3)
console.log(arr1)
console.log("Slice ", Narr)

/*from 1 to 3, so started from 0 and 1 so selected one, 0,1,2,3, ended count on 3 but didnt select it
The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start, 
up to a (not inclusive) given end.
*/

const arr2 = Narr.splice(1,3)
console.log("Splice ",Narr)
console.log(arr2)

//Difference
/*
Orginal Array: [0,1,2,3,4,5]
after slice original array: [0,1,2,3,4,5]
after splice original array: [0,4,5]

Difference is that splice manipulates the original array, the spliced portion was removed from the array. The slice doesn't do any of that.  
*/