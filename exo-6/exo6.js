// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log("Nombre de voitures de Joe:", joeInfo.cars.length);

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log("Nombre de salles de bains de Joe:", joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.
joeInfo.garage = true;
console.log("Joe a maintenant un garage:", joeInfo.garage);

// 2. Création de la variable 'team' qui est un objet vide pour stocker des informations sur l'équipe.
let team = {};

// 3. Ajout des propriétés 'players' et 'games' qui sont des tableaux vides pour stocker les joueurs et les matchs.
team.players = [];
team.games = [];

// 4. Remplissage du tableau 'players' avec des objets représentant chaque joueur.
team.players.push({ firstName: "Pablo", lastName: "Sanchez", age: 11 });
team.players.push({ firstName: "Laura", lastName: "Johnson", age: 12 });
team.players.push({ firstName: "Mike", lastName: "Brown", age: 13 });

// 5. Remplissage du tableau 'games' avec des objets représentant chaque match joué.
team.games.push({ opponent: "Broncos", teamPoints: 42, opponentPoints: 27 });
team.games.push({ opponent: "Sharks", teamPoints: 35, opponentPoints: 29 });
team.games.push({ opponent: "Tigers", teamPoints: 50, opponentPoints: 45 });

// 6. Ajout de la méthode 'addPlayer' pour ajouter un nouveau joueur à l'équipe.
team.addPlayer = function(firstName, lastName, age) {
    this.players.push({ firstName, lastName, age });
};

// 7. Appel de la méthode 'addPlayer' pour vérifier son bon fonctionnement.
team.addPlayer("Alice", "Smith", 14);
team.addPlayer("Eve", "Turner", 15);

// 8. Ajout de la méthode 'addGame' pour ajouter un nouveau match au tableau 'games'.
team.addGame = function(opponent, teamPoints, opponentPoints) {
    this.games.push({ opponent, teamPoints, opponentPoints });
};

// 9. Appel de la méthode 'addGame' pour vérifier son bon fonctionnement.
team.addGame("Wolves", 45, 30);
team.addGame("Eagles", 55, 35);

// 10. Calcul de la somme des points de l'équipe sur tous les matchs joués.
team.totalPoints = function() {
    return this.games.reduce((sum, game) => sum + game.teamPoints, 0);
};

console.log("Total des points de l'équipe:", team.totalPoints()); // Affiche: 227

// 11. Calcul de la moyenne des points de l'équipe adverse sur tous les matchs joués.
team.averageOpponentPoints = function() {
    let totalOpponentPoints = this.games.reduce((sum, game) => sum + game.opponentPoints, 0);
    return totalOpponentPoints / this.games.length;
};

console.log("Moyenne des points des adversaires:", team.averageOpponentPoints()); // Affiche: 33.75

// 12. Écriture d'une fonction pour trouver le joueur le plus âgé.
team.oldestPlayer = function() {
    return this.players.reduce((oldest, player) => oldest.age > player.age ? oldest : player);
};

console.log("Le joueur le plus âgé:", team.oldestPlayer()); // Affiche les informations du joueur le plus âgé

// 13. Bonus: Tri des joueurs par ordre alphabétique.
team.players.sort((a, b) => a.lastName.localeCompare(b.lastName));

console.log("Joueurs triés par ordre alphabétique:", team.players);
