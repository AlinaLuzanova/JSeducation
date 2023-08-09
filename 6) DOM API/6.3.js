/*
Дана html страница с разметкой. В app.js создайте переменные со следующими элементами:
в переменную title сохраните элемент заголовка h1
в переменную btn сохраните элемент кнопки button#btn
в переменную subtitle сохраните элемент h2 из второй секции (с текстом Second section)
в переменную sections сохраните все элементы section
 */
const title = document.getElementsByTagName('h1')
const bin = document.querySelector('#btn')
const subtitle = document.querySelector('.title.gray');
const sections = document.querySelectorAll('section')
const p = $0;
p.getAttribute('href') //получает данные

p.setAttribute('href') //устанавливает данные
//class в html = ClassName в JS

const list1 = document.querySelectorAll('li')
//получили коллекцию, у которой есть метод forEach

const list2 = document.getElementsByTagName('li')
//это html коллекция, у нее нет такого метода, поэтому надо использовать цикл for

//0$ - это текущий выбранный элемент во вкладке элементы в инструментах разработчика
const el = $0
el.classList //выводит список того, что есть в el
el.classList.add('item')
el.classList.remove('item')
el.classList.contains('item')//выводит булевое значение
el.classList.toggle('item')//проверяет есть ли в элементе указанный класс и если есть,
// удаляет его, а если нет, добавляет и возвращает булевое значение

el.parentElement //parent element
el.children //дочерные элементы - выводит массив
el.children[0]//конкретный элемент массива
el.firstElementChild // вернет первый дочерний жлемент-тэг
el.lastElementChild
el.firstChild //вернет первый текстовый узел
el.nextElementSibling //вернет следующий  элемент, находящийся на той же ступени иерархии
el.nextElementSiblingel.nextElementSibling //можно так подряд делать
el.previousElementSibling //аналогично прошлый элемент

function fn1() {
    console.log('ahting')
}
title.addEventListener('click',fn1) //вызов функции
title.onmouseenter = fn1 //функция вызывается при нажатии мышкой на тэг
title.setAttribute('click',null)//установка атрибута

title.onmouseenter = fn1//добавили функцию
title.onmouseenter = null //сняли функцию
title.removeEventListener()

const accordions = document.querySelectorAll("accordion")
const panels = document.querySelectorAll("panel")
accordions.forEach((accordion, index)=>{
    accordion.addEventListener("click",()=>{
        panels[index].classList.toggle("show")
    });
});