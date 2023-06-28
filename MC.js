const readline = require('readline-sync');

function prompt (msg) {
	console.log(`=> ${msg}`)
}

function invalidNumber(num) {
	return num.trimStart() === '' || Number.isNaN(Number(num));
}

while (true) {
	prompt('Welcome I am a Mortgage Calculator.\n Press Enter To Continue:')
	readline.question();

	prompt('Alright! Looks like we want to calculate how broke... I mean monthly mortgage payments for that house you can totally afford.\n Press Enter To Continue:')
	readline.question();

	prompt('Well lets first get acquainted, I may be a few lines of code but you can think of me as your friendly mortgage calculator. What do the humans call you\n Enter Your Name:')
	
	let userName = readline.question();
	
	prompt(`They call you that? Alright ${userName}\n The first step we need to take together is you telling me the LOAN AMOUNT you plan on begging the banks for this fancy new house?\n Enter Loan Amount:`)
	let loanAmount = readline.question();

	while (invalidNumber(loanAmount)) {
		prompt('BEEP BOOP Invalid Number');
		loanAmount = readline.question();
	}

	prompt('Cool Cool, now I think the next step is going to be getting your bank account info... wait I mean the loan duration.\nEnter the Loan Duration:(Months) ');
	let loanDuration = readline.question();

	while (invalidNumber(loanDuration)) {
		prompt('BURRRR NOPE Invalid Number');
		loanDuration = readline.question();
	}

	prompt('Alright, obviously the banks would be crazy not to give you the money. Whats that APR looking like?\nEnter your Annual Percentage Rate:(Example 7% = 0.07) ');
	let apr = readline.question();
	let monthlyInterestRate = apr / Number(12);

	while (invalidNumber(apr)) {
		prompt('THAT DOESNT FEEL GOOD IN MY TOTALLY REAL STOMACH... by the way Invalid Number');
		apr = readline.question();
		monthlyInterestRate = apr / Number(12);
	}

	let monthlyPayment = Number(loanAmount) * (Number(monthlyInterestRate) / (1 - Math.pow((1 + Number(monthlyInterestRate)), (-Number(loanDuration)))));
	prompt(`Well lets see how were looking,\nHere is your monthly payement: ${monthlyPayment}` );
    
	prompt('I have to ask this or my boss is going to fire me\nWould you like to calculate again? y/n');
	let answer = readline.question();
	if (answer[0].toLowerCase() !== 'y') break;
}



// let monthlyPayment = Number(loanAmount) + Number(apr) + Number(loanDuration)



