const start = document.querySelector(".start");
const stepers = document.querySelectorAll(".stepers");
const preambule = document.querySelector(".Preambule");
const contentQuestion = document.querySelector(".test");
// console.log(stepers);
// console.log(stepers[0]);

start.addEventListener("click", firstStep);

function firstStep(){
    start.style.display = "none";
    stepers[0].classList.remove("shadow");
    stepers[1].classList.add("shadow");
    preambule.style.display = "none";
    contentQuestion.classList.remove("remove");
}