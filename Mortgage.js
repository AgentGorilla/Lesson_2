/*
Pieces of information to ask User
- ask user for the loan amount
- ask user what is the annual percentage rate
- ask user the loan duration

Calculations
- Monthly interest rate 
- loan duration in months 
*/

//Formula
//let m = p * (j / (1 - Math.pow((1 + j), (-n))));

// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months 

// print payment amount as dollars & cents e.g. $124.35

//run code through ESLint

const MESSAGES = require('./MortgageMessages.json');

const readline = require('readline-sync');

function prompt(msg) {
	console.log(`> ${msg}`);
}

function invalidNumber(num) {
	return num.trimStart() === '' || Number.isNaN(Number(num));
}

function sum() {
	return loanAmount * (apr / (1 - Math.pow((1 + apr), (-months))));
}

prompt('Welcome! My name is Mortgage, I am here to help your loan. What is your name?');
let user = readline.question('Enter your name: ', (userName) => {
	console.log(`Hello ${userName}!`);
	readline.close();
});

prompt(`Hello ${user}, I am pleased to help you today!`);

prompt('What is the loan amount in USD');
let loanAmount = readline.question('Enter Loan Amount: ', (principle) => {
	while (invalidNumber(principle)) {
		prompt(MESSAGES['invalidNumber']);
        loanAmount = readline.question();
		//console.log(principle);
		//readline.close();
	}
	console.log(principle);
	// readline.close();
});

let months = readline.question('Enter Loan Duration: ', (principle) => {
	console.log(principle);
	readline.close();
});

function aprMonths (apr) {
	return apr / months
}
let apr = readline.question('Enter Loan APR: ', (principle) => {
	function aprMonths (apr) {
		return apr / months
	}
	console.log(aprMonths());
	readline.close();
});


console.log(sum());





// prompt("Please enter your loan duration (Months)");
// readline.question();


