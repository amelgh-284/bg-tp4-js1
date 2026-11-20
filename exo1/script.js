"use strict"; // Mode strict (slides 51 et 141)

// Exercice 1 : un clic sur chaque bouton appelle une fonction f1...f6 (slides 45 et 131)
// Les commentaires // sont vus au slide 36
// Les affichages se font avec console.log (slide 33)

// f1 : affiche le nom
function f1() {
  const nom = "John"; // const + type primitif String (slides 37 et 51)
  console.log(nom);
}

// f2 : affiche le prénom
function f2() {
  const prenom = "Doe"; // String (slide 37)
  console.log(prenom);
}

// f3 : affiche "Nom-Prénom"
function f3() {
  const nom = "John";
  const prenom = "Doe";
  // Template literal (slide 141) pour concaténer
  console.log(`${nom}-${prenom}`);
}

// f4 : affiche l'âge
function f4() {
  const age = 30; // type number (slide 37)
  console.log(age);
}

// f5 : affiche la note
function f5() {
  const note = 15; // number (slide 37)
  console.log(note);
}

// f6 : affiche Pi
function f6() {
  const PI = 3.14; // constante de type number (slides 37 et 51)
  console.log(PI);
}