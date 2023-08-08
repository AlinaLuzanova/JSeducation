/*
Find:

Задача: Найти первое четное число в массиве чисел.
Исходный массив: [3, 7, 2, 9, 8, 5]
Ожидаемый результат: 2
 */

const numbers = [3, 7, 2, 9, 8, 5];
const result = numbers.find(num => num%2===0);
console.log(result)