"use strict"; // Mode strict (slides 51 et 141)

// Exercice 2 : tableaux et objets (slides 38, 39 et 40)

// f1 : tableau d'étudiants, affiché un par ligne
function f1() {
  // Tableau de String (slide 38)
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

  // Boucle for...of pour parcourir le tableau (slide 44)
  for (const etudiant of etudiants) {
    console.log(etudiant); // slide 33
  }
}

// f2 : un objet étudiant
function f2() {
  // Objet littéral avec propriétés nom, prenom, age (slide 39)
  const etudiant = { nom: "John", prenom: "DOE", age: 30 };
  console.log(etudiant); // affiche l'objet entier (slide 33)
}

// f3 : tableau d'objets étudiants
function f3() {
  // Tableau d'objets (slide 40)
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];

  // Boucle (slide 44) + accès aux propriétés (slide 39)
  for (const e of etudiants) {
    // Template literal (slide 141) pour obtenir "nom1-prenom1-21"
    console.log(`${e.nom}-${e.prenom}-${e.age}`);
  }
}