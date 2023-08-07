//Method1 - объявление функции, функцию можно объявить до её создания
sum(1,2)
function sum(a,b){
    return a+b;
}
//Method2 - функциональное выражение
/*
Имя функции и переменная, к которой функция приравнена —
это не одно и то же. Имя функции нельзя менять, а вот переменной,
 к которой приравнена функция, можно дать другое значение.
 В случае функции-выражения с именем, это имя
 может быть использовано только внутри самой функции.
 При попытке использовать его снаружи возникнет ошибка
  (а если ранее была объявлена переменная с таким именем,
  будет возвращено undefined).
 */
const sum = function suma(a,b){
    return a+b;
}
//Method3 - IIFE - immediately invoked function expression
//{function(a,b){
 //   return a+b;
//}}(5,4)
//Method4- Стрелочные функции
const sum = (a,b)=>{
    return a+b;
}
//Другой метод записи, доступен только для однострочных функий
const sum = (a,b) => a+b;
const add1 = x => x+1;