//может внутри себя скоминировать map filter, много чего может
// будем работать с двумя параметрами: колбек и изначальное значение

const order = [
    {
        id: 1,
        name: 'Лопата',
        price: 1000,
        quantity: 1,
    },
    {
        id: 2,
        name: 'Удочка',
        price: 1200,
        quantity: 2,
    },
    {
        id: 3,
        name: 'Ведро',
        price: 500,
        quantity: 3,
    },
    {
        id: 4,
        name: 'Мороженое',
        price: 100,
        quantity: 8,
    },
];

let totalPrice = order.reduce((accumulator, person) =>{
    return accumulator + person.price;
}, 0);
console.log(totalPrice)
//посчитать уникальные элементы в массиве
const numbers = [1, 2, 3, 1, 2, 4, 5, 3, 6];
const uniqueCount = numbers.reduce((accum, value) =>{
    if(!accum.includes(value)) {
        accum.push(value);
    }
    return accum;
}, []);
console.log(uniqueCount)
//Подсчитать количество повторяющихся элементов в массиве объектов.
const numbers1 = [1, 2, 3, 1, 2, 4, 5, 3, 6];
const numbers2 = numbers1.reduce((accumulator, value) => {
    accumulator[value] = (accumulator[value] || 0) + 1;
    return accumulator;
}, {});

console.log(numbers2);