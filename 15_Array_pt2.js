const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros); //this will add array within the array
// console.log(marvel_heros) 
// console.log(marvel_heros[3][1]) 

// const all_heros = marvel_heros.concat(dc_heros) //
// console.log(all_heros)

//concat combines two or  more array and this ones become a new array.

//one more easier method than concat: Spread
//an e.g: take water glass and drop it, the glass witll break and spread

const all_new_heros = [...marvel_heros,...dc_heros]
console.log(all_new_heros)
/*
->marvel_heros is a list of Marvel heroes.
->dc_heros is a list of DC heroes.
->[...] is called the "spread operator" in JavaScript, and it is used to take all the items from the marvel_heros and dc_heros lists 
and spread them into a new list.
->const all_new_heros = creates a new list (called all_new_heros) that contains all the heroes from both marvel_heros and dc_heros.

So in the end, all_new_heros will be a list with heroes from both Marvel and DC combined into one.

more values can be added:
const all_new_heros = [...marvel_heros,...dc_heros,...boys_heros]

1) Memory Usage: If the marvel_heros and dc_heros arrays are very large, spreading them into a new array can consume a lot of memory
because you're creating a new array that holds all the values of both lists. For very large datasets, this can lead to performance issues.

2)Duplicate Entries: If the marvel_heros and dc_heros arrays contain any of the same heroes (e.g., "Batman" appears in both),
the spread operator will not automatically remove duplicates. You’ll end up with duplicate entries in all_new_heros unless you handle duplicates manually.

3)Non-Array Objects: The spread operator works with objects that are iterable (like arrays). If either marvel_heros or dc_heros is not an array
(e.g., an object), using the spread operator will cause an error because it cannot spread a non-iterable object.

4)Deep Copies: The spread operator creates a shallow copy, meaning it only copies the top-level elements.If the arrays contain objects or nested arrays, 
only the references to those objects are copied, not the objects themselves. This can lead to unexpected behavior if you modify 
the original objects after spreading them.
*/

const arr1= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr1=arr1.flat(Infinity)
console.log(real_arr1)
//you need to defined depth in () of another_array.flat(), for example the arr1 is 3-4 depths but there is a trick of using infinity, which will
//take care of depth itselt


//mostly for data scrapping down below:
console.log(Array.isArray("Saqlain"))
console.log(Array.from("Saqlain")) //will convert it in to array
console.log(Array.from({name:"Saqlain"})) //interesting for interviews

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) //of returns a new array from a set of elements 