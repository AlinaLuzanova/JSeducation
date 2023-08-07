function mainCode(numbers) {
    for (let i = 0;i<numbers.length; i++){
        if (i%2===0){
            numbers[i]+=3;
        }
    }
    return numbers;
}
console.log(mainCode([1,2,3,4,5,6]))