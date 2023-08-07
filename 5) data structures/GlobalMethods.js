//Глобальные объекты - это основные объекты, предоставляемый функционал для работы с данными и совершения операций

console.log(Number(true))
//наиболее интересные для нас на данный момент фундаментальные объекты- Object and Array
const obj = {a:1, b:2};
Object.keys(obj) //массив с ключами
Object.values(obj) //массив значений
console.log(Object.entries(obj))//объект объектов

//Array
console.log(Array.from('hello world'))