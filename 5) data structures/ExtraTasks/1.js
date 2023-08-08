/*
Очередь с ограниченной емкостью: Реализуйте структуру данных очереди (queue),
которая имеет ограниченную емкость. Если очередь заполнилась, добавление новых
 элементов приводит к удалению старых.
 */

let queue = [1,2,3,4,5,6,7,8];
let counter = queue.length;
//элемент добавления
function manager(items){
    if(counter<10){
        queue.push(items);
        counter++;
    }
    if(counter>=10){
        queue.shift();
        counter--;
    }
    console.log(queue)
}

manager(1);
manager(2);
manager(3)



