/*
Задача: Найти сумму квадратов четных чисел, умноженных на 2.
Исходный массив: [1, 2, 3, 4, 5, 6]
Ожидаемый результат: 56 (2^2 * 2 + 4^2 * 2 + 6^2 * 2)
 */
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num=>num%2===0);
const doubleNumbers = evenNumbers.map(num=>num**2);
const sum = doubleNumbers.reduce((accum,number)=>{
    return accum+number
}, 0);
console.log(sum)