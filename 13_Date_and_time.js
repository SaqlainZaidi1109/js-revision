//dates are calculated in milliseconds
//in future you will be using Temporal instead of date

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.getTimezoneOffset())
console.log(myDate.getTime())
console.log(myDate.getSeconds())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof myDate) //object

let myCreatedDate = new Date(2023, 0, 23) //months start from 0
console.log(myCreatedDate.toDateString())

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)  
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date("2023-01-14")  
console.log(myCreatedDate2.toLocaleString())

let myCreatedDate3 = new Date("01-13-2024")  
console.log(myCreatedDate3.toLocaleString())

//timestamp
let myTimestamp=Date.now()
console.log(myTimestamp)

console.log(Math.floor(Date.now()/1000)); //for turning into seconds without getting decimal

let newDate = new Date();
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth())
console.log(newDate.getMonth()+1)

//customization
newDate.toLocaleString('default',{
    weekday:"long"
})