const readline = require('readline-sync');

function invalidNumber(num) {
	return num.trimStart() === '' || Number.isNaN(Number(num));
}
while (true) {
	console.log('Enter your loan amount: ');
	let loanAmount = readline.question();

	while (invalidNumber(loanAmount)) {
		console.log('Invalid Number');
		loanAmount = readline.question();
	}

	console.log('Enter the loan duration: ');
	let loanDuration = readline.question();

	while (invalidNumber(loanDuration)) {
		console.log('Invalid Number');
		loanDuration = readline.question();
	}

	console.log('Enter your Annual Percentage Rate: ');
	let apr = readline.question();
	let monthlyInterestRate = apr / Number(12);

	while (invalidNumber(apr)) {
		console.log('Invalid Number');
		apr = readline.question();
		monthlyInterestRate = apr / Number(12);
	}

	let monthlyPayment = Number(loanAmount) * (Number(monthlyInterestRate) / (1 - Math.pow((1 + Number(monthlyInterestRate)), (-Number(loanDuration)))));
	console.log(`Here is your monthly payement: ${monthlyPayment}` );
    
	console.log('Would you to do it again? y/n');
	let answer = readline.question();
	if (answer[0].toLowerCase() !== 'y') break;
}



// let monthlyPayment = Number(loanAmount) + Number(apr) + Number(loanDuration)



