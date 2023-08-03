const readline = require('readline-sync');

function prompt(mgs) {
	console.log(`=> ${mgs}`);
}

prompt('Enter your name: ');
let username = readline.question();

prompt(`What question do you have today ${username}?`);
let userQuestion = readline.question();

let randomNumber = Math.floor(Math.random() * 8);

//console.log(randomNumber)

let eightBall = '';

switch (randomNumber) {
case 0:
	eightBall = 'It is certain';
	break;
case 1:
	eightBall = 'It is decidely so';
	break;
case 2:
	eightBall = 'Reply hazy try again';
	break;
case 3:
	eightBall = 'Can\'t predict now';
	break;
case 4:
	eightBall = 'Don\'t count on it';
  break;
case 5:
	eightBall = 'My sources say no';
	break;
case 6:
	eightBall = 'Outlook not so good';
	break;
case 7:
	eightBall = 'Signs point to yes';
	break;
}

prompt(`The Magic Eight Ball says, ${eightBall}`);