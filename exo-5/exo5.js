// you can write js here

console.log('exo-5');
// 1. Créer une variable 'input' qui prend pour valeur n'importe quelle phrase ou mot à traduire
let input = 'Turpentine and turtles';

// 2. Créer maintenant un tableau de lettres, contenant toutes les voyelles de l'alphabet
const vowels = ['a', 'e', 'i', 'o', 'u'];

// 3. Créer une variable 'resultArray' dont la valeur est un tableau vide pour stocker la traduction
let resultArray = [];

// 4. Créer une boucle qui parcourt toutes les lettres de notre chaine de caractères
for (let i = 0; i < input.length; i++) {
  // Afficher la lettre courante dans la console pour le débogage
  console.log(input[i]);
  // 5. Vérifier si la lettre courante est une voyelle
  if (vowels.indexOf(input[i]) !== -1) {
    // 7. Si la lettre est une voyelle, l'ajouter au tableau 'resultArray'
    resultArray.push(input[i]);
  }
}

// 8. Utiliser 'join()' et 'toUpperCase()' pour un bon formatage de la chaîne finale
let whaleTalk = resultArray.join('').toUpperCase();

// Afficher le résultat final
console.log(whaleTalk); // Affichera 'UEIEAE'
