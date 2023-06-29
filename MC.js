const readline = require('readline-sync');

const MORTGAGE_MESSAGES = require('./mcMessages.json');

function prompt (msg) {
	console.log(`=> ${msg}`);
}

function invalidNumber(num) {
	return num.trimStart() === '' || Number.isNaN(Number(num));
}

while (true) {
	
	prompt(MORTGAGE_MESSAGES['welcomeMessage']);
	readline.question();

	prompt(MORTGAGE_MESSAGES['objectiveMessage']);
	readline.question();

	prompt(MORTGAGE_MESSAGES['userNameInput']);
	let userName = readline.question();

	while (userName.trim() === '') {
		prompt(MORTGAGE_MESSAGES['invalidName']);
		userName = readline.question();
	}
	
	prompt(`They call you that? Alright ${userName}.\n ${MORTGAGE_MESSAGES['loanAmountResponse']}`);
	let loanAmount = readline.question();

	while (invalidNumber(loanAmount)) {
		prompt(MORTGAGE_MESSAGES['invalidNumberLoanAmount']);
		loanAmount = readline.question();
	}

	prompt(MORTGAGE_MESSAGES['loanDurationResponse']);
	let loanDuration = readline.question();

	while (invalidNumber(loanDuration)) {
		prompt(MORTGAGE_MESSAGES['invalidNumberLoanDuration']);
		loanDuration = readline.question();
	}

	prompt(MORTGAGE_MESSAGES['aprResponse']);
	let interestRate = readline.question();
	
	while (invalidNumber(interestRate)) {
		prompt(MORTGAGE_MESSAGES['invalidNumberApr']);
		interestRate = readline.question();
	}

	let loanDurationMonthToYear = loanDuration * 12;
	let annualInterestRate = Number(interestRate) / 100;
	let monthlyInterestRate = annualInterestRate / Number(12);
	

	let monthlyPayment = Number(loanAmount) * (Number(monthlyInterestRate) / (1 - Math.pow((1 + Number(monthlyInterestRate)), (-Number(loanDurationMonthToYear)))));
	
	prompt(`${MORTGAGE_MESSAGES['output']} ${monthlyPayment.toFixed(2)}` );

	prompt(MORTGAGE_MESSAGES['reCalculate']);
	let answer = readline.question();
	if (answer[0].toLowerCase() !== 'y') break;
}



// let monthlyPayment = Number(loanAmount) + Number(apr) + Number(loanDuration)



