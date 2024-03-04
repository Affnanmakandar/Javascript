
// let div = document.querySelector("div");
// console.log(div);
// get attribute
// let id = div.getAttribute("id");
// console.log(id);
// set Attribute
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newclass"));
// style attribute
// we write node.style
// This is inline style
let div = document.querySelector("div");
// styling in js
div.style.backgroundColor = "green";
div.style.fontFamily = "algerian";
// To change  or replace value
// div.innerText = "Hello";
// we can hide our styling
// div.style.visibility = "Hidden"
// To add new element  in js
// let newbtn = document.createElement("button");
// accessing tags
// let p= document.querySelector("p");
// console.log(p);
// giving inner text
// newbtn.innerText = "click me";
// console.log(newbtn);
// append means at the end of the div appending showing the button
// p.append(newbtn)
// Shortcut way directly
// // creating element
// let newheading = document.createElement("h1");
// newheading.innerHTML  = "<i> I am khalnaayak </i>";
// document.querySelector("body").prepend(newheading);
// removing the element
let para = document.querySelector("p")
para.remove();
// hw 1 study documentation of append child() and remove child() exact usage.