/*Reduce:

Задача: Найти сумму всех элементов массива чисел.
Исходный массив: [10, 20, 30, 40]
Ожидаемый результат: 100

 */

const numbers = [10, 20, 30, 40];
const result = numbers.reduce((accum,elem)=>{
    return accum + elem;
},0)
console.log(result)