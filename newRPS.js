const readline = require('readline-sync')

VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

function prompt(msg) {
  console.log(`=> ${msg}`)
}

prompt(`Choose one: ${VALID_CHOICES.join(', ')}`)
let getUserInput = readline.question();

while (!VALID_CHOICES.includes(getUserInput)) {
  prompt('That is not a valid choice');
  getUserInput = readline.question();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES [randomIndex]

prompt(`You Chose ${choice}. Computer chose ${computerChoice}`);


