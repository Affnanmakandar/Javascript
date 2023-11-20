// console.log("affnan!");
// console.log("Hello world ")
// console.log("I l ")
// popup adding 
// alert("popup")
// alert("you are a good boy")
// variables
// age = 24
// name = "tony stark";
// console.log(name);
// age=69;
// x = null;
// null
// y=undefined
// undefined
// there are differences in undefined and null null matlab khali

// // undefined matlab nahi pata 
// radius = 14;
// console.log(radius);
// boolean 
// isfollow = false;
// console.log(isfollow);
// ye int waala code yaani datatype nahi chalega
// int a = 12;
// console.log(a);
// rules they are case sensitive example:
// fullname="affnanmakandar";
// FULLNAME="makandarsahil";
// console.log(fullname);
// console.log(FULLNAME);
// SPACE IS NOT ALLOWED 
// we can add $ '_' letters and digits are allowed example
// $fullname="affnanmakandar";
// FULL_NAME="makandarsahil";
// you can search reserve words on mdn
//  variable will be defined in camel case example:
// full Name .
//  keywords  let const var 
// 1 let keyword is use to define name example
let name = "affnan makandar";
console.log(name);
// let age = 24;
// let totalPrice = 1000;
// console.log(age);
// console.log(totalPrice);
// VAR NAHI USE KARENGE KYUNKI VO PEHLE USE HOTA THA HAMARE PAAS EKMA SIX 6 SCRIPT THI 
// VAR SE REDECLARE KAR SAKTE HAI ISLIYE VO USE NAHI KARENGE EXAMPLE
// var age = 12;
// var age = 78;
// console.log(age);
// isliye use nhi karte hai var confusion ki wajah se let ko use karke define karengey
// const matlab constant ko define karna matlab const ki value change nhi hogi example
// const a=24;
// a=79; refresh karenge toh error aayega
// console.log(a);
// const PI=3.14;
// console.log(PI);

// another method
// let a;
// bydefault undefined dega par agar
// let a=10;
// denge toh output 10 aaeyga
// const a;
// error dega
// curly braces block hai

// {
//     let a = 5;
//     console.log(a);
// }
// alag alag block hoga toh print hoga
// {
//     let a=10;
//     console.log (a);
// }
//  datatypes in javascript
// let price = 100.5;
// console.log(price);
// use to find type of data
// typeof price
// example  to find type of data
// let fullName="tonystark";
// console.log(fullName);
// typeoffullName
// we can use in boolean too
// isFollow = true;
// we can see typeofisFollow then enter
// let x = null;
// typeofx
// let x = BigInt("123");
// typeof x
// let y = Symbol("hello");
// obj ko bananeke liye const se use hota hai
// student jo hai vo obj hai
// const student = {
//     firstName:"affnan makandar",
//     age:20,
//     cgpa:8.2,
//     ispass:true
// };
// we can access
// student[age]
// or else
// console.log(student.["age"]);
// we can change value  of object for  example 
// normal variable mei change nahi hota objects mei hie hota hai
// student["age"] + 1;
// we can change name also
// student ["name"] = "rohit verma";
// console.log(student["name"]);
// itna yaad rakh ki
// let mei change kar sakte hai
// const mei nhi kar sakte
// par const ka jo obj ki key value hei matlab firstname:"affnan makandar" isko change kar sakte hai
// lets practice 
// const product = {
//     title: "Ball pen",
//     rating: 4,
//     offer: 5,
//     price:270
// };

// console.log(product);
const profile ={
    username : "apnacollege",
    isfollow:false,
    posts: 195,
    followers: 569,
    following:4,
    info: "To educate someone is the highest privilege"
};
console.log(profile);
// we can see type of key values inside obj also example below
// console.log(typeof profile["username"])
