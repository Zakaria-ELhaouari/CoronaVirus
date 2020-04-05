const humberger = document.getElementsByClassName("humber");
const list = document.querySelectorAll(".nav-line");
const links = document.querySelectorAll("nav-line li");

// humberger.addEventListener("click",() => {
//     list.classList.toggle("open")
// });

function humberger(){
    list.classList.toggle("open")
}