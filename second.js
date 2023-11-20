/* This  is a comments
 console.log("hello world"); */
//  Operators in javascript
// operators are used to perform operations on data. + - */ are operators or arithmetic operators
// // 1. Aritmetic operators
// let a=5;
// let b=2;
// console.log("a = ", a , "& b = ", b);
// console.log("a+b =", a+b);
// console.log("a-b =", a-b);
// console.log("a*b =", a*b);
// console.log("a/b =", a/b);
// extra in java
// console.log("a%b =", a%b);
// squares  
// console.log("a**b =", a**b);
// yaha pe 5*5=25
// 3. unary operator
// increment operator ++  decrement opereator -- example
// a++ or a-- a=a+1 a=a-1
// 1. Aritmetic operators
// let a=5;
// let b=2;
// console.log("a = ", a , "& b = ", b);
// shortcut a++
// a ki value 6 hogi
// console.log("a =",a); // 4
// console.log("a+=  a",a++); //5
// console.log("a = ",a); //6
//  4. Assignment operators are =,+=,*= %= , **= 
// inka kaam hota hai variable ki value assign karna example a = 5
//  Few examples,
// let a=5;
// let b=2;
//a-=4 //means a = a+4
// console.log("a = ",a); // value 9 aayegi
 // a= a-4
// console.log("a=",a);
//  5. comparison operators '==, ===, !=, !==,>=,>,<,<='
// let a=5;
// let b=2;
// console.log("a==b",a!=b); //true dega ya false dega
// let a=5; //number
// let b="5"; //string
// console.log("a==b",a==b); //true 1 ye string ko number mei convert karega fir ye number to number se compare karega matlab value check karega
// let a=5;
// let b=2;
// console.log("a==b",a===b); //false ye strict version hai
// let a=5;
// let b=2;
// console.log("a!=b",a!==b); //true dega
// let a=5;
// let b=5;
// console.log("5>=5",a>=b);

//  5. Logical operators
// logical && And  dono true hai toh true aayega example
// logical or ||  dono mei koi bhi true hoga toh true aayega example
// logical not !  koi bhi true hoga toh false banaega aur koi bhi false hoga usko true banaega example
// ya toh false ya toh true
// logical operator && example
// let a=6;
// let b=5;
// let cond1 = a>b; //true
// let cond2 =a==6; //true
// console.log("cond1 && cond2", cond1 && cond2);
// logical or|| example
//  console.log("cond1|| cond2", a<b|| a===6); //dono mei se ek condition sahi hai toh final answer dega
//  logical not ! example
//  console.log("!(6<5)",!(a<b));  // ye true dega matlab false ka opposite true dega
// conditionals statements
// iska kaam hota hai condition dalna 
// 1  if statement 
//  example multiple if statement
// let age = 18;
// if(age>=18){
//     cons
//     console.log("you can vote");
// }
// if(age<18){
//     console.log("you cannot vote");
// }
//  2 example 
// let mode = "black";
// let color;
// if(mode==="dark"){
//     color = "black";
// }
// if(mode==="Light"){
//     color="white";
// }
// console.log(color);
// if else statement
// if(mode==="dark"){
//     color = "black";
// }
// else(mode==="Light"){
//     color="white";
// }
// console.log(color);
//  let age =25;
//  if(age>=18){
//     console.log("vote");
//  }
//  else{
//     console.log("not vote");
//  }
//  To find if a number is even or odd 
// let num =20;
// if(num%2==0){
//     console.log(num,"is even");
// }
// else{
//     console.log(num,"is odd");
// }
// syntax means rules 
// 3. Else if statement example
// let age =15;
// if (age<18){
//     console.log(" is a junior");
// }
// else if(age>60){
//     console.log("is asenior");
// }
// else{
//     console.log(" is amiddle");
// }
// let mode="dark";
// let color;
// if(mode==="dark"){
//     color = "black";
// } else if(mode==="blue"){
//     color= "blue";
// } else if(mode==="pink"){
//     color="pink";
// } else{
//     color= "white";
// }
// console.log(color);
// single line case
// if(mode==="dark") console.log(mode); this is not a professional statement use curly braces
//  Ternary Operators Rules  condition ? true output :false output
// example
// let age =25;
//  let result=age>=18 ? "adult": "not adult";
//  console.log(result); choti sie condition  check karne ke liye kaam aata hai
// 5. Mdn se research kar sakte hai
// 6. switch case statement as homework 
//  lets practice;
// q:1 Get user  to input a number using prompt matlab alert("Enter a number:") Check  if the number is a multiple of 5 or not
// explaination of prompt
// alert("HEllo"); // one time popup
// prompt("hello"); //input bhi lega
// let name = prompt("hello"); isme user se input le sakte hai name variable mei information store karke
// console.log(name);
// solution of problem
//  let num=prompt("Enter a number");
//  if(num%5==0){
//     console.log(num,"num is multiple of 5");
//  }
//  else{
//     console.log(num,"num is  not multiple of 5");

//  }
// q2: Write a code which can give grades to students according to their scores:
/* 80-100 A
70-89 B
60-69 C
50-59 D
0-49 F */
// solution range hai toh && use hoga >= matlab ki ex 90 ya 90 se jyada
// let score=prompt("enter your score form (0-100)");
// let grade;
// if(score>=90&& score<=100){
// grade = "A";
// }
// else if(score>=70&&score<=89){
//     grade = "B";
// }
// else if(score>=60&&score<=69){
//     grade = "C";
// }
// else if(score>=50&&score<=59){
//     grade = "D";
// }
// if(score>=0&&score<=49){
// grade = "F";
// }
// console.log("According to your score your grade was :",grade);
