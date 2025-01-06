// you can write js here
console.log('exo-2');
const myDate = new Date();
const day = "C'est un jour de semaine.";
const weekend = "C'est le weekend!";

const currentDay = myDate.getDay(); // 0 pour dimanche, 6 pour samedi
if (currentDay === 0 || currentDay === 6) {
  console.log(weekend);
} else {
  console.log(day);
}

const currentHour = myDate.getHours();
if (currentDay === 5 && currentHour >= 17) {
  console.log(weekend);
}
if (currentDay === 1 && currentHour < 9) {
    console.log(weekend);
  }

  const isTesting = true;
let testDay = currentDay;
let testHour = currentHour;

if (isTesting) {
  testDay = parseInt(prompt("Entrez un jour de la semaine (0-6) : (0 pour dimanche 6 pour samedi)"));
  testHour = parseInt(prompt("Entrez une heure (0-23) :"));
}

if (testDay === 0 || testDay === 6 || 
    (testDay === 5 && testHour >= 17) || 
    (testDay === 1 && testHour < 9)) {
  console.log(weekend);
} else {
  console.log(day);
}

