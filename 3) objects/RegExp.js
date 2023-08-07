//const regex1= = /\w+/;
const regex2 = new RegExp('\\w+');

const str = 'js is cool. learn js';
console.log(/js/i.test(str))

console.log(str.replace(/js/ig, 'php'))

console.log(str.match(/js/g))
//null если match не готов
