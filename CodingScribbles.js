//Coerce values to numbers

let number = 42;
console.log(typeof number.toString());

console.log((42).toString());
console.log(typeof (42).toString());
console.log(typeof 42..toString());

//Array.prototype.toString
console.log(typeof [1, 2, 3, 4].toString())
console.log([1, 2, null, 3, 4, undefined].toString())
                //^empty

//String Function
console.log(String(24))
console.log(typeof String(44))
console.log(String(null))
console.log(String(undefined))