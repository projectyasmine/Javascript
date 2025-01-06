// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

// 1. Enlever le dernier élément du tableau
secretMessage.pop();

// 2. Ajouter les mots 'to' et 'program' à la fin du tableau
secretMessage.push('to', 'program');

// 3. Changer le mot 'easily' par 'right'
var index = secretMessage.indexOf('easily');
if (index !== -1) {
    secretMessage[index] = 'right';
}

// 4. Supprimer le premier élément du tableau
secretMessage.shift();

// 5. Ajouter "Programming" en début de tableau
secretMessage.unshift('Programming');

// 6. Remplacer les mots 'get', 'right', 'the', 'first', 'time' par 'know'
index = secretMessage.indexOf('get');
if (index !== -1) {
    secretMessage.splice(index, 5, 'know');
}

// 7. Afficher le message secret dans la console en utilisant .join
console.log(secretMessage.join(' '));
