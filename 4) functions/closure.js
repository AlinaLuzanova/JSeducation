//замыкание - это способность функции запоминать
// переменные из внешней области видимости

function addByx (num){
    function addByx2(num1){
    return num+num1;
    }
    return addByx2;
}

const addByTwo = addByx(10);
console.log(addByTwo(3))