const start = document.querySelector(".start");
const stepers = document.querySelectorAll(".stepers");
const preambule = document.querySelector(".Preambule");
const contentQuestion = document.querySelector(".test");
const questionnes = document.querySelectorAll(".questionnes");
const next = document.querySelector(".next");
const precedent = document.querySelector(".precedent");
const barProgress = document.querySelector(".w3-blue");

const fauxChoix = document.querySelectorAll(".faux");
const btnResule = document.querySelector(".rslBtn");
const questionProgres = document.querySelector(".progres");
const resultFinal = document.querySelector(".rsltMsg");
const answers = document.querySelectorAll(".choix");
console.log(answers);
// console.log(questionnes);

// console.log(stepers);
// console.log(stepers[0]);

start.addEventListener("click", firstStep);

function firstStep() {
    start.style.display = "none";
    stepers[0].classList.remove("shadow");
    stepers[1].classList.add("shadow");
    preambule.style.display = "none";
    contentQuestion.classList.remove("hide");

    // presedentButton();
}
// for( i=0; i < questionnes.length;i++ ){
//     next.addEventListener("click", () => {

//         if (i < questionnes.length) {

//             questionnes[i].classList.remove("remove");
//             // questionnes[i-1].classList.add("remove");
//             // next.disabled = true;
//             // if (i === 21) {
//             //     nextBtn.innerText = "Terminer le test";
//             //     nextBtn.classList.add("result");
//             //     let resultBtn = document.querySelector(".result");
//             //     resultBtn.addEventListener("click", Results);
//             // } else {

//             }
//         });

// }

// const i = 0;
// do {
//     next.addEventListener("click", () => {
//         if (i < questionnes.length) { 
//             questionnes[i].classList.remove("remove");
//             // questionnes[i-1].classList.add("remove");
//             // next.disabled = true;
//             // if (i === 21) {
//             //     nextBtn.innerText = "Terminer le test";
//             //     nextBtn.classList.add("result");
//             //     let resultBtn = document.querySelector(".result");
//             //     resultBtn.addEventListener("click", Results);
//             // } else {

//             }
//         });

//         i++;
// } while (i < questionnes.length);
// function startReponse() {
//     if(){
//         for (i = 0; i <= questionnes.length; i++) {
//             console.log(i);
//             next.addEventListener("click", startReponse);
//             questionnes[i].classList.remove("remove");
//             questionnes[i - 1].classList.add("remove");
//             console.log([i - 1]);
//         }
//     }

// }

// nextBtn.addEventListener("click", () => {
//     if (currentQuestionIndex < 21) {
//         currentQuestionIndex++;
//         showQuestion(questions[currentQuestionIndex]);
//         folowProgress(currentQuestionIndex);
//         hideprevious();

//         nextBtn.disabled = true;
//         if (currentQuestionIndex === 21) {
//             nextBtn.innerText = "Terminer le test";
//             nextBtn.classList.add("result");
//             let resultBtn = document.querySelector(".result");
//             resultBtn.addEventListener("click", Results);
//         } else {
//             nextBtn.innerText = "Suivant";
//         }
//     }
// });
// next.addEventListener("click", function (event) {
//     var value = event.target.questionnes;
//         if ( i = 0 && next.addEventListener('click')) {

//         }
// });



//     // questionnes.forEach(element => {
//     //     i = 0;
//     //     if (i < questionnes.length) {
//     //         questionnes[0].classList.remove("remove");
//     //         i++
//     //     }
//     // })
//     // questionnes.forEach(function(item){
//     //     console.log(item)
//     // });
// }

// questionnes.forEach(element => {
//     next.onclick = function () {
//         for (i = 0; i <= questionnes.length; i++) {
//             console.log(i);
//             questionnes[i].classList.remove("remove");
//             // questionnes[i - 1].classList.add("remove");
//             // console.log([i - 1]);

//         }
//     }
// })

// next.addEventListener('click',e =>{

//     if(e.target.classList === 'remove'){
//        e.target.classList.remove("remove");
//     //    localStorage[''] = list.innerHTML
//     }

//  });

// function hdiud() {
//     for (i = 0; i < questionnes.length; i++) {

//         next.addEventListener("click", () => {
//             if (i === 0) {

//                 questionnes[i].classList.remove('remove');

//             } else {

//                 questionnes[i].classList.remove('remove');
//                 questionnes[i - 1].classList.add('remove');

//             }
//         })
//     }
// }
// function presedentButton(){
//     if (i === 0) {
//         precedent.classList.add("remove");
//     } else {
//         precedent.classList.remove("remove");
//     }
// }

let i = 0;
next.addEventListener("click", () => {
    if (i === 0) {
        questionnes[i].classList.remove('remove');
        showResult();
    } else if (i === questionnes.length) {
        next.style.display = "none";
        precedent.style.display = "none";
        btnResule.classList.remove('hide');
    } else {
        questionnes[i].classList.remove('remove');
        questionnes[i - 1].classList.add('remove');
        precedent.classList.remove('hide');
        showResult();
    }

    i++;

    progress(i)
})
// console.log(i);
precedent.addEventListener("click", () => {
    questionnes[i].classList.add('remove');
    questionnes[i - 1].classList.remove('remove');
    i--;
    if (i === 0) {
        precedent.classList.add('hide');
    }
    progress(i - 1)
})

function progress(number) {
    const numberProgres = number + 1;
    questionProgres.innerText = numberProgres;
    barProgress.style.width = `calc(${numberProgres} * calc(100% / 5))`;

}

// function hejd(){
//     const checked = [];
//     vraisChoix[i].addEventListener("click", () =>{
//         if (vraisChoix[i].textContent === "OUI") {
//             // const lokkkl = checked.push("jdjdjd")
//             // console.log(lokkkl);
//             console.log('jddkjdk')
//         }

//     })
//     vraisChoix[i]
//     console.log(i);
// }
var all = [];
var stockResult = [];
function showResult() {
    vraisChoix = document.querySelectorAll(".vrais");
    vraisChoix[i].addEventListener("click", () => {
        var rslt = all.push("");
        stockResult.push(rslt);
        // console.log('jddkjdk')
        // console.log(i);
        // console.log(all);
        // console.log(hdhdhd);
        // var obj = "ssss";
        // var newData = [...all, obj];
        // jjd.push(newData);
        // console.log(newData);
        // console.log(jjd);
        console.log(stockResult);
        console.log(rslt);
        // return newData;
    });
    
}
// const anserStock = [];
// vraisChoix.addEventListener('click', () =>{
//     anserStock.push(vrais)
// })

// function answer(){
//     for(i=0 ; i<=anserStock ; i++){

//     }
// }
// let ansrrr = [];

// function jikko(){
//     for(i=0;i<=vraisChoix.length;i++){
//         vraisChoix[i].addEventListener("click", ()=>{
//             const Ansewr = ansrrr.push("vrais");
//         })
//     }
// }

// jikko()
// const answer = [];
// let a = 0;
// vraisChoix[a].addEventListener('click', () => {
//     // console.log(Answers);
//     // function getCheckedValue() {
//     //     for (var i = 0; i < vraisChoix.length; i++) {
//     //         if (vraisChoix[i].click()) {
//     //             var Answers = answer.push('vrais');
//     //             answer.push(vraisChoix[i].textContent)
//     //         }
//     //     }
//     // }
//     // return getCheckedValue()
//     if(i<=vraisChoix.length){
//         var Answers = answer.push('vrais');
//         answer.push(vraisChoix[i].textContent)
//     }
// });


// console.log(answerAll);
// vraisChoix.addEventListener("click", e => {
//     e.preventDefault();
//     function getCheckedValue(radios) {

//         var checked = [];

//         for (var i = 0; i < vraisChoix.length; i++) {

//             if (vraisChoix[i].click()) {

//                 checked.push(vraisChoix[i].textContent)
//             }
//         }
//         return checked.length > 0 ? checked : null;
//     }
//     var Answers = getCheckedValue(radios);
//     const correctAnswers = [contentQuestion.answer.textContent, 'OUI', 'OUI', 'OUI', 'OUI'];
//     Answers.unshift(n);
//     console.log(Answers);
//     let score = 0;
//     Answers.forEach((answ, index) => {

//         if (answ === correctAnswers[index] && answ !== '') {

//             score ++;

//         } 
//     });
// })
// console.log(getCheckedValue())


// // function result(){
// //     if(answer.length === questionnes.length){
// //         sdhshdhsfhjsdhkj
// //     }else if(answer.length === 3){
// //         dssdjncsdkld
// //     }else if(answer.length < 3){
// //         jhsdhshdshfs
// //     }
// // }
// var a = 0;
// function addByOne(e) {
//     a++
// }


// var elMsg = document.getElementById('count');
// var el = document.getElementById('selection');
// vraisChoix.addEventListener('click', function (e) {
//     addByOne(e);
//     vraisChoix[a].classList.add('yaya');
// }, false);

btnResule.addEventListener("click", () => {
    stepers[1].classList.remove("shadow");
    stepers[2].classList.add("shadow");
    contentQuestion.classList.add("hide");
    resultFinal.classList.remove("hide");
    if(stockResult.length === questionnes.length){
        resultFinal.innerHTML = `<div>machi korona</div>`
    }else if(stockResult.length >= questionnes.length/2){
        resultFinal.innerHTML = `<div> korona</div>`
    }else if(stockResult.length < questionnes.length/2){
        resultFinal.innerHTML = `<div> hhhdhjdj</div>`
    }
})
