function mainCode(numbers) {
    newArr = [];
    i = 0;
    while (i < numbers.length){
        if (!(i%2===0)) {
            newArr.push(numbers[i] * 2)
        }
        else if (i%2===0){
            newArr.push(numbers[i])
        }
        i+=1;
    }
    return newArr;
}
console.log(mainCode([1,2,3,4,5]))