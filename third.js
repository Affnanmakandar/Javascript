// console.log("Strings and loops in javascript");
// for loops means to execute piece of code again and again example
//  1. for loop,whle loop, do while loop
// 1 for looop print 1 to 5
// for(let i=1;i<=5;i++){
//     console.log("apna college");
// }
// console.log("loop has ended");
// Explaination
// let i=1 initialixation ; i<=5 stopping condition matlab kab tak chalega; i++ updation yaani kis tarike se update hoga
// initialixation ek baar use hota hai
// 2. calculate sum of 1 to 5
// let sum=0;
// for(let i=1;i<=5;i++){
//     sum =sum+i; // 
// }
// console.log("sum =",sum);

// calculate sum of 1 to n
// let sum=0;
// let n=20;
// for(let i=1; i<=n; i++){
//     sum=sum+ i;
// }
// console.log("sum =",sum);
// print i 5 times
// for(let i=1; i<=5;i++){
//     console.log("i =",i);
// }
//  IFINITE LOOP : A loop that never ends ye kabhi bhi nahi use karna just for understanding example
// for(let i=1;i>=0;i++){
//     console.log("i =",i);
// } do not try to run this loop
// While loop syntax
/* while(condition){
    do some work
} */
// let i=5;
// while(i<=10){
//     console.log("i=",i);
//     i++;
// }
//  do while loop se atleast 1 baar run karega 
/*syntax: do{
    do some work
}while(condition); */
// let i=20;
// do{
//     console.log("Affnan");
//     i++;
// }while(i<=10); // loop will run only one time as the condition was i<=10 and we assign i=20  thats why it will run only one time as compared to while loop.
// running do while loop
// let i=1;
// do{
//     console.log("i=",i);
//     i++;
// }while(i<=5);
// HENCE FORTH THEY ARE GENERAL LOOPS
// 1. FOR OF LOOP ISKA KAAM HOTA HAI YE STRINGS AUR ARRAYS MEI LOOP LAGANE MEI HELP HOTA HAI 
// SYNTAX FOR(let val of strVar){
    // do some work
// }
// example
// let str="JavaScript";
// let length =0;
// for(let i of str){ // i is iterator ---> characters
//     console.log(i);
//     length++;
// }
// console.log("string length =",length);  //10
// for in loop are basically used for objects and arrays  example
// let student={
//     name:"RAHUL KUMAR",
//     age:20,
//     cgpa: 7.5,
//     ispass:true
// };
//this student is an object now we will here put a loop  in this object
// for(let i in student){ // iterator key value return karega
//     console.log("key =",i,"value=", student[i]);
// }
// Lets practice
// q1" Print all even numbers from 0 to 100.
// soln: we will print all the  nos from 0 to 100
// yaha per looop ke andar condition check karenge
/*for(let count=0;count<=100;count++){ //not equal to !=  karte toh odd nos print hote
    if(count%2===0){ //even numbers ki condition
        console.log("count = ",count);
    }
    }*/
    // q2: Create a game where you start with any random game number. Ask the user to keep guessing the game number until 
    // the user enters the correct number
    // solution prompt create karke user se input lengey;
//     let gameNum = 25;
//    let userno=prompt("Guess the game number:");
// lets match the  userno and gameno using while loop we will print when the user will enter a correct no
// otherwise the loop will run as it is
// ==tab use hoga jab no string ki value mei use hoga otherwise single = use hoga
// while(userno!=gameNum){ //game
//      userno=prompt("You entered the wrong number guess again:");
// }
// console.log("congratulations,you entered the correct number");
//  Stings in JS
// let str = "college";
// let str2 = 'affnan';
// console.log(str[0]) //c aayega isse str ki position pata kar sakte hai
// inbuilt properties str.length likhke length pata kar sakte hai
// Template Literals in JS it is a way to have embedded expressions in Strings example
// let sentence = `This is a template literal`; //special type ki string hoti hai
// console.log(sentence); // we can print type also
// console.log(typeof sentence); //matlab ye kaunsa type h num ya string ye print karega
// To understand better let us see the practical example of template literals
// let obj = {
//     item: "pen",
//     price:10,
// };
// console.log("The cost of",obj.item,"is",obj.price,"rupees");
// better tarika ye hai ki isko ek single string mei combine karna usig  template literal 
// let output = `The cost of ${obj.item} is ${obj.price} rupees `;
// console.log(output);
// string ka part bana hai toh 10 highlight nhi hoga output mei
// String interpolation
// to create strings by doing substitution of placeholders
// syntax: `string text$(expression) string text`
// example:
// let specialString = `This is template literal ${1+2+3}`; // 1+2+3 is an expression
// console.log(specialString); 
// Escape characters are also a part of string example
// console.log("affnan\n makandar "); //next line dega aise hie /t denge toh tab space dega
// let str = "Apna\tCollege"; //12 ye single character mei print hoga \t single character mei count hoga
// console.log(str.length);
// String MEthods in Js 
// These are built in functions to mamipulate a string 
// method matlab kuch bhi kaam karke dena method is like a block of code jisme hame kuch kaam karke deta hai
// 1 str.to upperCase() to convert abc to ABC example:
// let str ="Mera college"; // you need to create new string with a new change it is immutable new string mei change aayega purani mei nhi hoga change
//  let newStr=str.toUpperCase();
// console.log(str);
// console.log(newStr);
// lower case
// let str ="Mera college"; // you need to create new string with a new change it is immutable new string mei change aayega purani mei nhi hoga change
//  let newSTR=str.toLowerCase();
// console.log(str);
// console.log(newSTR);
// trim method str.trim() it removes whitespace in starting and end example
// let str = "    Mera college js      "
// console.log(str.trim());
// String methods in JS
// a.  str.slice(start,end) returns a part of string example
// let str ="hello";
// console.log(str.slice(1,3));
// str1.concat(str 2) joins str2 with str1 example 2 strings ko jodna matalab
// let str1 = "mera";
// let str2= "college";
//  let res = "Iam learning coding from"+str1.concat(str2);// we can also write str1+str2
//  console.log(res);
// str.replace(searchVal, newVal) matlab kisi chheex ko replace karna example
// let str = "hello";
// console.log(str.replace("h" ,"y")); //h ko y ke saath replace kiya
// str.charAt(idx) example
// let str = "I love you";
// to replace// 
// str = str.replace("I", "S");
// console.log(str); //I 
// practice question 
// q1: Prompt the user to enter their full name . Generate a username for them based on the input 
// Start username  with @ , followed by their full name and ending with the fullname length
//  eg: username ="affnanmakandar", username should be "@affnanmakandar14"
 let fullname = prompt("Enter full name without spaces ");
 let username ="@"+fullname+ fullname.length;
 console.log(username);
 