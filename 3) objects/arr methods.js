/*
1) Дан массив fruits. Используя встроенный метод массива,
определите есть ли в массиве значение 'orange'
и ответ сохраните в константу hasOrange.
 */
fruits = ['apple', 'banana', 'melon', 'orange']
let hasOrange = true;
for (let word of fruits){
    if(!fruits.includes('orange')){
        hasOrange = false;
    }
}
//console.log(hasOrange)
/*
 Дан массив cars. Используя встроенный метод массива,
 выберите из него первые три значения и сохраните их в константу favoriteCars.
 Создайте константу otherCars,
 сохранив в нее оставшиеся три значения из исходного массива cars.
 */
const cars = ['BMW', 'Nissan', 'VW', 'Skoda', 'Audi', 'Kia'];
const favoriteCars = []
const otherCars = []
for(let i = 0; i<cars.length; i++){
    if(i<3) {
        favoriteCars.push(cars[i])
    }
    else{
        otherCars.push(cars[i])
    }
}
console.log(favoriteCars)
console.log(otherCars)