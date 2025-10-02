// let a = 5;

// let b = 5;

// let c = a + b;
// console.log(c);

// let x = 7
// let y = 8
// let result = x +y

// console.log(result)

// function Sum() {
//   console.log(arguments);
// }
// Sum(30, 20, 34, 2, 56, 12);

// let Arrow = (num1,  num2, ...numbers) => {
//   console.log(num1, num2, numbers);
// };

// Arrow(22, 88, 77, 45, 99, 100);

// let faktorial = 1;

// function Recursive(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   faktorial = num * Recursive(num - 1);
//   return faktorial;
// }

// let num = 5;
// console.log(Recursive(num));

// let Sum = (a, b) => a + b;
// let Sub = (a, b) => a - b;
// let Mult = (a, b) => a * b;
// let Division = (a, b) => a / b;

// let Calculate = (num1, num2, func) => {
//   return func(num1, num2);
// };

// console.log(Calculate(20, 5, Mult));

// let str  = "  Welcome asdhgfdkglfhj;k/ljl.vkhjgh  "

// console.log(str.trim())

let arr1 = [56, 14, 50, 44, 100, 2];
// arr.push(99)
// arr.unshift(22)

// arr.pop()
// arr.shift()
let everyElement = arr1.some((num)=> num < 10)
console.log(everyElement)