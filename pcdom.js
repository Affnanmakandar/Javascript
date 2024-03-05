 // remainder read what is the exact usage of append child and remove child
//  question : create a button element give it a text "click me" background color red & text color white Insert a button inside a body tag
 let newbtn =  document.createElement("button")
 newbtn.innerText = "clickme";
 newbtn.style.color = "white"
 newbtn.style.backgroundColor = "red"
 document.querySelector("body").prepend(newbtn)
// question 2 : create a p tag in html give it a class & some styling now create a new class in css and try to append this class to <p> element
// did you notice how you overwrite the class name when you add a new one? Solve this problem using class list
let para = document.querySelector("p");
para.getAttribute("class");
// change class
// para.setAttribute("class","newclass")
para.classList.add("newclass")