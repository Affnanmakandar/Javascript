

// Event handling in js
// syntax
// node.event = () => {
// handle here
// }

// let div let btn1 = document.querySelector("btn1");
// btn1.onclick = ()=>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// };=
let div = document.querySelector("div");
let btn1= document.querySelector("#btn1");
// div.onmouseover = () =>{
//     console.log("tu div ke andar hai");
// };
// Event object
// Syntax
// node.event(e){ e is object
    // handle here
// } or else search on mdn
// // Event Listeners
// btn1.addEventListener ("click",(evt)=>{
//     console.log("button1 was clicked=handler1")
//     // console.log(evt);
// })
// btn1.addEventListener ("click",()=>{
//     console.log("button1 was clicked= handler2")
// })

// const handler3=("click",()=>{
//     console.log("button1 was clicked=handler3")
// })
// btn1.addEventListener ("click",()=>{
//     console.log("button1 was clicked=handler4")
// })
// // removing one of the event listener
// btn1.removeEventListener("click",handler3);
// practice question
// toggle button to click dark and light mode
let toggler = document.querySelector("#toggle");
let mode = "light"; //dark


toggler.addEventListener("click",() =>{
   if(mode === "light"){
    mode = "dark";
document.querySelector("body").style.backgroundColor = "black";
document.querySelector("p").style.color = "white"

    
   }else{
    mode ="light";
    document.querySelector("body").style.backgroundColor = "white";
    document.querySelector("p").style.color = "black"
   }
  console.log(mode);
});
