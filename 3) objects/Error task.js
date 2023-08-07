/*
1. Задание:
Напишите функцию calculateArea(width, height),
которая вычисляет площадь прямоугольника.
Если аргументы width или height не являются числами или меньше или равны нулю,
 функция должна выбросить пользовательскую ошибку InvalidInputError с сообщением
 "Некорректные входные данные".
 */

class InvalidInputError extends Error{
    constructor(message) {
        super(message);
        this.name = 'InvalidInputError';
    }
}
function calculateArea(width, height){
    let square = width*height
    if(width===0 || height===0 || typeof width === 'number' || typeof height === 'number'){
    throw new InvalidInputError('Некорректные входные данные')
    }
    return square;

}
    try {
    const width = 5;
    const height =0;
    const area = calculateArea(width,height);
    console.log('Площадь:', area);
    } catch (error){
    if(error instanceof InvalidInputError){
        console.error('Ошибка ввода:', error.message);
    } else {
        console.error('Произошла ошибка:', error.message);
    }
    }

/*

 */

function sum(a,b){
    if( typeof a !== 'number'|| typeof b !== 'number'){
        throw new Error('В функцию не переданы числа для сложения')
    }
    return a+b;
}
try{
    sum()
}catch (err){
    console.error(err)
}
console.log("end")