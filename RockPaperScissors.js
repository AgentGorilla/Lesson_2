const readline = require('readline-sync');
VALID_CHOICES=['rock', 'paper', 'scissors', 'lizard', 'spock'];
// add Lizard & Spock
// Lizard beats Spock
// Rock beats lizard 
// 
function prompt(msg) {
	console.log(`=> ${msg}`);
}
while(true){
	prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
	let choice = readline.question();

	while (!VALID_CHOICES.includes(choice)) {
		prompt('That\'s not a valid choice');
		choice = readline.question();
	}

	let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
	let computerChoice = VALID_CHOICES[randomIndex];

	prompt(`You chose ${choice}. Computer chose ${computerChoice}`);
// copy + paste first block into computer block /then switch the two conditions ex. rock & paper -> paper & rock
	if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'rock') ||
		(choice === 'lizard' && computerChoice === 'paper') ||
		(choice === 'spock' && computerChoice ==='scissors') ||
		(choice === 'lizard' && computerChoice === 'spock') ||
		(choice === 'spock' && computerChoice === 'rock') ||
		(choice === 'paper' && computerChoice === 'spock') ||
		(choice === 'rock' && computerChoice === 'lizard') ||
		(choice === 'scissors' && computerChoice === 'lizard')) {
		prompt('You win');
	} else if ((choice === 'scissors' && computerChoice === 'rock') ||
    (choice === 'paper' && computerChoice === 'scissors') ||
    (choice === 'rock' && computerChoice === 'paper') ||
		(choice === 'paper' && computerChoice === 'lizard') ||
		(choice === 'rock' && computerChoice === 'spock') ||
		(choice === 'scissors' && computerChoice === 'spock') ||
		(choice === 'lizard' && computerChoice === 'rock') ||
		(choice === 'lizard' && computerChoice === 'scissors')) {
		prompt('Computer Wins');
	} else {
		prompt('It\'s a tie!');
	}

	prompt('Would you like to play again? (y/n)');
	let answer = readline.question().toLowerCase();

	while(answer[0] !== 'y' && answer[0] !== 'n') {
		prompt('Please try again');
		answer = readline.question().toLowerCase();
	}

	if (answer[0] !== 'y') break;
}