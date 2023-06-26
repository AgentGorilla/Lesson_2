// //Coerce values to numbers

// // let number = 42;
// // console.log(typeof number.toString());

// // console.log((42).toString());
// // console.log(typeof (42).toString());
// // console.log(typeof 42..toString());

// // //Array.prototype.toString
// // console.log(typeof [1, 2, 3, 4].toString())
// // console.log([1, 2, null, 3, 4, undefined].toString())
// //                 //^empty

// // //String Function
// // console.log(String(24))
// // console.log(typeof String(44))
// // console.log(String(null))
// // console.log(String(undefined))

// // let val = getAValueFromSomewhere();

// // if (val === undefined || val === null) {
// //     console.log('world')
// // } else {
// //     console.log("hello")
// // }

// // console.log(val)

// // let loanAmount = 400000
// // let monthlyInterestRate = 5
// // let loanDurationMonths = 48
// // let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate),(-loanDurationMonths))));

// // console.log(monthlyPayment)

// // let p = 400000
// // let j = 0.07
// // let n = 360
// // let m = p * (j / (1 - Math.pow((1 + j), (-n))));

// // console.log(parseInt(m))
// // let output = 

// // let principle = 400000
// // let rate = 0.05
// // let n = 12
// // let t =30


// // let p = 400
// // let j = 0.05
// // let n = 360
// let p = 400
// let j = 0.05
// let n = 360

// function output() {
//     return p * (j / (1 - Math.pow((1 + j), (-n))))
// }

// console.log(output())



// function isOdd(number) {
//     return Math.abs(number) % 2 === 1
// }

// // function isEven(number){
// //     return Math.abs(number) % 2 === 0
// // }



// console.log(isEven(1))
// console.log(isOdd(2))
// //Math.abs returns absolute number
// console.log(Math.abs(-1))



for (let number = 1; number < 100; number += 1) {
    if (number % 2 === 1) {
      continue;
    }
  
    console.log(number);
  }

