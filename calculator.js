// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation

// eslint-disable-next-line no-undef

const MESSAGES = require('./calculator_messages.json')

const readline = require('readline-sync');

function prompt(msg) {
	console.log(`=> ${msg}`);
}

function invalidNumber(num) {
	return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welcome']);

while (true) {
	prompt(MESSAGES['number1']);
	let number1 = readline.question();

	while (invalidNumber(number1)) {
		prompt(MESSAGES['invalidNumber']);
		number1 = readline.question();
	}

	prompt(MESSAGES['number2']);
	let number2 = readline.question();

	while (invalidNumber(number2)) {
		prompt(MESSAGES['invalidNumber']);
		number2 = readline.question();
	}

	prompt(
		MESSAGES['performOperation']
	);
	let operation = readline.question();

	while (!['1', '2', '3', '4'].includes(operation)) {
		prompt(MESSAGES['mustPerformOperation']);
		operation = readline.question();
	}

	let output;

	switch (operation) {
	case '1':
		output = Number(number1) + Number(number2);
		break;
	case '2':
		output = Number(number1) - Number(number2);
		break;
	case '3':
		output = Number(number1) * Number(number2);
		break;
	case '4':
		output = Number(number1) / Number(number2);
		break;
	}

	console.log(`The result is ${output}`);

	prompt(MESSAGES['operationAgain']);
	let answer = readline.question();

	if (answer[0].toLowerCase() !== 'y') break;
}
