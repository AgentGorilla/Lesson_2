// const readline = require('readline-sync')

// function invalidNumber(num) {
//     return num.trimStart() === '' || Number.isNaN(Number(num));
// }

// console.log('welcome');


//     console.log('What is the first number?');
//     let num1 = readline.question();

//     while(invalidNumber(num1)) {
//         console.log('invalid number');
//         num1 = readline.question();
//     }

//     console.log('What is the first number?');
//     let num2 = readline.question();

//     while(invalidNumber(num2)) {
//         console.log('invalid number');
//         num2 = readline.question();
//     }


// let output = Number(num1) + Number(num2)


// console.log(`The result is ${output}`)

// const readline = require('readline-sync');

// function prompt(message) {
//   console.log(`=> ${message}`);
// }

// function isInvalidNumber(number) {
//   return number.trim() === '' ||
//          Number(number) < 0   ||
//          Number.isNaN(Number(number));
// }

// prompt('Welcome to Mortgage Calculator!');

// while (true) {
//   prompt('---------------------------------');

//   prompt('What is the loan amount?');

//   let amount = readline.question();
//   while (isInvalidNumber(amount)) {
//     prompt('Must enter a positive number');
//     amount = readline.question();
//   }

//   prompt("What is the interest rate?");
//   prompt("(Example: 5 for 5% or 2.5 for 2.5%)");
//   let interestRate = readline.question();

//   while (isInvalidNumber(interestRate)) {
//     prompt('Must enter a positive number');
//     interestRate = readline.question();
//   }

//   prompt("What is the loan duration (in years)?");
//   let years = readline.question();

//   while (isInvalidNumber(years)) {
//     prompt('Must enter a positive number');
//     years = readline.question();
//   }

//   let annualInterestRate = Number(interestRate) / 100;
//   let monthlyInterestRate = annualInterestRate / 12;
//   let months = Number(years) * 12;

//   let monthlyPayment = Number(amount) *
//                   (monthlyInterestRate /
//                   (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));

//   prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

//   prompt("Another calculation?");
//   let answer = readline.question().toLowerCase();
//   while (answer[0] !== 'n' && answer[0] !== 'y') {
//     prompt('Please enter "y" or "n".');
//     answer = readline.question().toLowerCase();
//   }

//   if (answer[0] === 'n') break;
// }

// const NUMBER_CARDS_IN_HAND = 5

// function dealHand() {
//   let hand = [];
//   for (let cardNumber = 0; cardNumber < NUMBER_CARDS_IN_HAND; ++cardNumber) {
//     hand.push(dealCard())
//   }
//   return hand;
// }

// dealHand()

// const NUMBER_CARDS_IN_HAND = 5;

// function dealHand() {
//   let hand = [];
//   for (let cardNumber = 0; cardNumber < NUMBER_CARDS_IN_HAND; ++cardNumber) {
//     hand.push(dealCard());
//   }

//   return hand;
// }

// console.log(dealHand())

// function dealHand() {
//   let hand = [];
//   for (let cardNumber = 0) {
//     hand.push
//   }
// }

// let object = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// object.c = object.c + 1
// console.log(object)

// function hello() {
//   console.log('hello')
// }

// hello()

// let greet = hello
// greet()

// let hello = function() {
//   console.log('hello')
// }

// hello()

// let myWord = 'Hello';
// ;

// console.log(myWord.concat(' there.'))

// let a = [1, 'hello', true]
// a[0] = 2;
// a[1] = 'GoodBye'
// a[2] = false;
// a[3] = 'Cool'
// a[4] = {
//   a: '1',
//   b: '2'
// }

// console.log(a)

