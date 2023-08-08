/*
Filter:
Задача: Отфильтровать массив строк, оставив только строки, длина которых больше 5 символов.
Исходный массив: ['apple', 'banana', 'kiwi', 'grape', 'pineapple']
Ожидаемый результат: ['banana', 'pineapple']
 */

const fruits = ['apple', 'banana', 'kiwi', 'grape', 'pineapple'];
const result = fruits.filter(item=>item.length>5);
console.log(result)