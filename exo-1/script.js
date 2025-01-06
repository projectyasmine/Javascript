// you can write js here
let kelvins = 294;
// Conversion en Celsius
let celsius = kelvins - 273;
// La température en Fahrenheit se calcule avec la formule : Fahrenheits = Celsius * (9/5) + 32.
let fahrenheits = celsius * (9/5) + 32;
// La méthode .floor() arrondit le nombre de Fahrenheit à l'entier inférieur.
fahrenheits = Math.floor(fahrenheits);
kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

// Afficher les résultats dans la console du navigateur
console.log("Température en Celsius : " + celsius);
console.log("Température en Fahrenheit : " + fahrenheits);
