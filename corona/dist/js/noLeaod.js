const acceuil = document.querySelector('.acceuile-page');
const conseil = document.querySelector('.conseil-page');
const btnConseil = document.querySelector('.btn-conseil');
const btnAcceul = document.querySelector('.btn-acceuil');

btnConseil.addEventListener("click", () => {
    acceuil.classList.add("companent");
    conseil.classList.remove("companent");
});

btnAcceul.addEventListener("click", () => {
    conseil.classList.add("companent");
    acceuil.classList.remove("companent");
});