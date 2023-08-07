//функция вызывает саму себя
/*
1) Базовое условие = терминальное (условие выхода из цикла)
2) Правило движения по рекурсии
 */

function recurse (n){
    if(n===0) return 1;
    return n*recurse(n-1)
}
console.log(recurse(3))

let counter = 0;
function repeater(char){
    counter++;
    if (counter ===5){
        counter = 0;
        return char;
    }
    return char + repeater(char);
}
console.log(repeater('x'))
console.log(repeater('a'))

function getLength(arr, count = 0){
    if (arr[count]===undefined) {
        return count;
    }
    return getLength(arr, count + 1);
}

console.log(getLength([1,2,3,4,5]))

