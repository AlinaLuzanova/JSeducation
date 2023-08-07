const  numbers = [1,2,3,4];
const users = [];
//filter возвращает булевое значение
const oddNumbers = numbers.filter(num=>num%2 !== 0)
const evenNumbers = numbers.filter(num=>num%2 === 0)

console.log(oddNumbers)
console.log(evenNumbers)
//includes - возвращает булевое значение и ищет,
//находится ли нужный элемент в строке/массиве

const odd = numbers.filter(num=> numbers.includes(num%2===0))
console.log(odd)