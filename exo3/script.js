"use strict"; // Mode strict (slides 51 et 141)

// Exercice 3 : exactement 2 fonctions, A appelle B (slide 45)

// Données Students : tableau d'objets (slide 40)
// Champs : id, nom, prenom, note, coef
const students = [
  { id: 1000, nom: "JOHN",   prenom: "DOE",     note: 14, coef: 5 },
  { id: 2000, nom: "BOB",    prenom: "CARLTON", note: 7,  coef: 1 },
  { id: 3000, nom: "RAYANE", prenom: "SMITH",   note: 13, coef: 3 }
];

// Fonction B : prend UN seul paramètre (float) et retourne un booléen (slide 45)
// En JS, il n'y a qu'un seul type numérique "number" pour les entiers et les floats (slide 37)
function B(note) {
  // Opérateur de comparaison, comparaison avec >= (slide 41)
  return note >= 10;
}

// Fonction A : parcourt les étudiants et appelle B (slide 45)
function A() {
  // Boucle for...of (slide 44)
  for (const student of students) {
    const admis = B(student.note); // appel de B (slide 45), accès à une propriété (slide 39)

    // Condition if...else (slide 42)
    if (admis) {
      // Template literal (slide 141) + console.log un par un (slide 33)
      console.log(`${student.id}: ADMIS`);
    } else {
      console.log(`${student.id}: AJOURNÉ`);
    }
  }
}