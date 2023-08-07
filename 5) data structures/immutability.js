//иногдп хотим, чтобы объекты не изменялись -
// иммутабельность
//do not use: push pop shift unshift sort reverse
//use: срез slice старого массива для создания нового
const arr = [1,2,3,4,5];
const newArr = arr.slice(0,4);//[1,2,3,4,] - альтернатива поп
const newArr2 = [0,...arr]; //распакованный массив

const obj = {
    a:1,
    b:2,
    c:3,
}
obj.d = 4//mutation
obj.a =10 //mutation

const obj2 = {
    ...obj,
    a:10,
    d:4,
}//immutable for obj


