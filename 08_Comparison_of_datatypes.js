// console.log(2>1); //greater than
// console.log(2>=1); //greater than equals to
// console.log(2<1); // less than
// console.log(2==1);//equals to
// console.log(2!=1); //not equals to

// console.log("4">1);
// console.log("04">1)

//while comparing make sure the datatype is similar

console.log(null>0); // false
console.log(null==0); // false
console.log(null>=0) // True
/*the reason is that an equalty check == and comparisons <>= <= works differently. Comaprison converts null to a number, traeting it as a 0.
Thats why (3) null>=0 is true and (1) null>0 is false. */

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)

//comparison and equality is different in Js    

//===, strict check , this wont check the value but data type aswell

console.log("2"===2)