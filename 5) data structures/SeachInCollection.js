//.find - принимает функцию и производит поиск. В отличие от include, возвращает не булевое значение,
//а полностью объект. Если элемента в наличии нет, возвращает undefined
//findIndex работает аналогично, но возвращает индекс найленного объекта.
//При ненахождении возвращает -1
const players = [
    {
        id: 1,
        name: 'Andres',
        surname: 'Iniesta',
        club: 'Vissel Cobe',
    },
    {
        id: 2,
        name: 'Eden',
        surname: 'Hazard',
        club: 'Real Madrid',
    },
    {
        id: 3,
        name: 'Mo',
        surname: 'Salah',
        club: 'Liverpool',
    },
    {
        id: 4,
        name: 'Lionel',
        surname: 'Messi',
        club: 'Barcelona',
    },
];

const messi = players.find(item =>item.surname === 'Messi');
console.log(messi)