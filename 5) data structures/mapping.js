//foreach - для каждого элемента массива, новый массив не создается
const num = [1,2,3,4,5,6,7]
function print (el,index){
    console.log(el)
}
num.forEach(print)
function doublenum(num){
    arr.push(num*2)
}
//map - обход и преобразование

function doublenum2(num){
    return num*2;
}
//const result = num.map(num=>num*2) //аналогично нижней записи
const result = num.map(doublenum2)//формируется новый массив
console.log(result)

const arra = [1,2,3,4]
const res1 = arra.map(arra=>arra*2)
console.log(res1)