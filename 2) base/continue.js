/*for(let i = 1; i<10; i++){
    if(i%2===0) continue; //скипнули нечетные значения
        //console.log(i)
}
//console.log('end')
/*
Обойдите циклом массив чисел numbers и сохраните в новый массив evenNumbers первые три четных числа из оригинального массива.

Предусмотрите выход из цикла, когда в массиве evenNumbers уже есть три значения.
 */

function mainCode(numbers) {
    const evenNumbers = [];
    let i = 0;
    while (i < numbers.length){
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
        if(evenNumbers.length>=3){
            break;
        }
        i++;
    }
    return evenNumbers;
}
console.log(mainCode([1,2,3,4,5,6,7,8,9]))