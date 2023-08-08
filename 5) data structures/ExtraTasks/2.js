/*
Map:
Задача: Удвоить каждый элемент массива чисел.
Исходный массив: [1, 2, 3, 4, 5]
Ожидаемый результат: [2, 4, 6, 8, 10]
 */

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(num =>num*2);
console.log(result)