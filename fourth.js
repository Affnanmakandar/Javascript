// Arrays 
// arrays are collection of items stored in a single  variable example
// 1 how to create an array let hereos=[info];
// let hereos=["ironman", "Thor", "Hulk","batman","superman","antman"];
// console.log(hereos); // hereos[3] bhi de sakte hai console.log mei
// let marks =[97,82,75,64,36];
// console.log(marks);
// console.log(marks.length); //to show length in array this is property jo ki value deta hai 
// Array indices arr[0],arr[1],arr[2] jaise hereos ke baad position diya hu [3] wahi 
// Looping over an array
// loops are iterable jiski madad se ham loop chalenge ex iterable mei strings objects and arrays chala sakte hai
// ex 1st for loop 
// index ki value arr.length hoga equal to nhi hoga example dekho
// let hereos=["ironman", "hulk","superman","spiderman","Thor","blackwidow","wonderwoman","antman","batman","Blackpanther"];
// for(let idx=0;idx< hereos.length;idx++){ // idx=0 rakhna hai <
//     console.log(hereos[idx]);
// }
// 2. for of loop and for in loop they are valid but we will prefer for of loop
// for of
// for(let hero of hereos){
//     console.log(hero);
// }
// let cities =["Delhi","Pune", "Mumbai","Hyderabad","Gurgoan"];
// for (let city of cities){
//     console.log(city.toUpperCase());//capital mei print hoga

// }
// Lets practice
// qs For a given array with marks of students --> [85,97,44,37,76,60] Find 
// the average marks of the entire class
// let marks = [85,97,44,37,76,60];
// let sum= 0;
// for(let val of marks){
//     sum =sum+val; // or else you can use sum+= val
// }
// let avg = sum / marks.length;
// console.log(`Avg marks of the class =${avg}`);
// qs For a given array with prices of 5 items --> [250,645,300,900,50]
// All items have an offer of 10% OFF on them . Change the array to store final price after applying offer.
// we can solve using for in or for loop 
//  For in loop solution
// let items =[250,645,300,900,50];
// let i =0;
// for(let val of items){
//     // console.log(`value of items = ${i} =${val}`);
//     let offer = val/10;// offer ki value
//     items[i]= items[i]- offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++; // increment kar dengey

// }
// Solution using for loop easy way
// for(let i =0; i<items.length;i++){
//         let offer = items[i]/10;// offer ki value
//         items[i]-=offer;

// }
// console.log(items);
// next topic array methods:
//  array methods are  push(): add to end ; pop():delete form end & return;  toString():converts array to string
//  push() example
// let vegetables = ["potato","carrot","capcicum","ladyfinger","Spinach","corainder","chilli","brinjal"];
// vegetables.push("chips","burger","paneer");
// console.log(vegetables); //add hoga push se
// pop() ex
//  let deleteditems=vegetables.pop();
//  console.log("deleted",deleteditems);
// console.log(vegetables.toString());
// console.log(vegetables);
// 2nd example
// let marks = [67,69,76,75,99];
// concat():joins multiple arrays and returns the result example
// let marvel = ["thor","ironman","spiderman"];
// let dc = ["Superman","Batman"];
// let indianhereos =["shaktimaan","krrish","Raone"];
//  let hereos=marvel.concat(dc,indianhereos);
//  console.log(hereos); //add hongey marvel mei
// unshift() method jo hai vo push ki tarah kaam karta hai aur shift() method hai vo pop() ki tarah kaam karta hai
// example of unshift():add to start 
// let indianhereos =["shaktimaan","krrish","Raone"];
// indianhereos.unshift("chantman");
// shift():delete element of first element
// let indianhereos =["shaktimaan","krrish","Raone"];
//  let val=indianhereos.shift();
//  console.log("deleted",val); //shaktimaan deleted
// Slice(): returns a piece of the array slice(staridx,endidx)  example:
// let indianhereos =["shaktimaan","krrish","Raone","kantman","tarxan","kalaman","wakanda","drstrange"];
// console.log(indianhereos);
// console.log(indianhereos.slice(1,3)); //two items 
// Splice() to remove delete and replace original array 
// splice(startidx,delCount,newEl1)
// let arr =[1,2,3,4,5,6,7] ;
// arr.splice(2,2,101,102);
//Element add 
// arr.splice(2,0,101) //2 jo hai vo ind 1 pe hai toh 2 jo hai vo start index hai 0 element delete kiya or 101 ko add kiya
// Delete element
// arr.splice(3,1); 3 ko idx 1 ki position hai toh 1 element ko delete kiya
//Replace element
// arr.splice(3,1,101);
// iske andar ek start index likhenge toh splice jo hai vo slice ki tarah act karega
// Note: INspect mei kiya tha ye chrome pe
// arr
// (7) [1, 2, 3, 101, 5, 6, 7]
// arr.splice(4);
// (3) [5, 6, 7]
// arr
// (4) [1, 2, 3, 101]
// lets  practise
//  Create an array to store companies --> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
/* a remove the first company from the array
b remove uber & add  ola in its place
c Add Amaxon at the end*/
// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // companies.shift();//start deletd 
// // companies.splice(2,1,"ola"); //Uber replaced to ola
// companies.push("amaxon");











       
                 




 
