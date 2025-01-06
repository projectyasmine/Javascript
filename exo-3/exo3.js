// you can write js here
console.log('exo-3');
// 1. Récupérer le choix de l'utilisateur
var playerInput = prompt("Your choice (rock, paper, scissors) ?");

// 2. Créer une fonction getPlayerChoice()
function getPlayerChoice(playerInput) {
    // 3. Convertir en minuscules
    playerInput = playerInput.toLowerCase();
    
    // 4. Vérifier si le choix de l'utilisateur est valide
    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors' || playerInput === 'bomb') {
        return playerInput;
    } else {
        console.log("Erreur : Choix invalide. Veuillez entrer 'rock', 'paper' ou 'scissors'.");
    }
}

// 5. Créer une fonction getComputerChoice()
function getComputerChoice() {
    // Tirer un nombre aléatoire entre 0 et 2
    var randomNumber = Math.floor(Math.random() * 3);
    
    // Associer le nombre à un choix
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// 6. Créer une fonction findWinner()
function findWinner(playerChoice, computerChoice) {
    // 7. Cas d'égalité
    if (playerChoice === computerChoice) {
        return 'Tied';
    }
    
    // 8. Déterminer le gagnant
    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }

    // 9. Déterminer le gagnant si 'paper'
    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }

    // 10. Déterminer le gagnant si 'scissors'
    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            return 'Won';
        } else {
            return 'Lost';
        }
    }
    
    // 13. Cheat code
    if (playerChoice === 'bomb') {
        return 'Won';
    }
}

// 11. Créer une fonction playGame()
function playGame() {
    var uChoice = getPlayerChoice(playerInput);
    var computerChoice = getComputerChoice();
    console.log("User choice: " + uChoice);
    console.log("Computer choice: " + computerChoice);
    
    // 12. Afficher le vainqueur
    console.log(findWinner(uChoice, computerChoice));
}

// Démarrer le jeu
playGame();
