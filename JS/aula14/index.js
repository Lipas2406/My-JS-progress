// IEEE 754-2008
let num1 = 15.006;
let num2 = 2.5;

// num1 = num1.toString()
// console.log(num1.toString() + num2);
// console.log(num1.toString(36));
// console.log(num1.toFixed(2));
// console.log(Number.isInteger(num1));
// let temp = num1 * 'Olá';
// console.log(Number.isNaN(temp));

num1 = 0.7
num2 = 0.1

 /* 
// num1 += num2; // num1 = num1  + num2 -> 0.8;
// num1 += num2; // 0.9;
// num1 += num2; // 1.0;

// num1 = num1.toFixed(2); // X
// num1 = parseFloat(num1.toFixed(2)); // ^-^
*/ 

num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));