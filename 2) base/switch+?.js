//Задача на switch
const spainCapital = 'Valencia';
let isCorrectAnswer;
switch (spainCapital){
    case('Madrid'): isCorrectAnswer = true;
    break;
    case('madrid'): isCorrectAnswer = true;
    break;
    case('MADRID'): isCorrectAnswer = true;
    break;
    default: isCorrectAnswer = false;
}
console.log(isCorrectAnswer)

//Задача на тренарный оператор
const a = 1;
const b = 2;
let result = a+b <4 ? 'мало': 'много'
console.log(result)