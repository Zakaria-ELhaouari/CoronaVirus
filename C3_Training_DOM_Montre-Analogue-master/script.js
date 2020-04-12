// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

console.log();

//Ajouter l'heure , minite , seconde  dans des varaiables

// console.log(haours);
// console.log(minute);
// console.log(seconde);

// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré




// console.log(dugreHaours);
// console.log(dugreMinute);
// console.log(dugreSeconde);
// Déplacer les aiguilles 
function demarrerLaMontre() {
    const date = new Date();
    const haours = date.getHours();
    const minute = date.getMinutes();
    const seconde = date.getSeconds();
    const dugreSeconde = seconde * 6;
    const dugreMinute = minute  * 6;
    const dugreHaours = haours * 15;
    AIGUILLEHR.style.transform = `rotate(${dugreHaours}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${dugreMinute}deg)`;
    AIGUILLESEC.style.transform = `rotate(${dugreSeconde}deg)`;

}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);