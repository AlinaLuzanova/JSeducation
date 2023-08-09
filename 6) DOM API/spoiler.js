/*
В разметке дана кнопка #myBtn и блок #spoiler, который по умолчанию скрыт.

Задача:

При клике на кнопку блок #spoiler должен отображаться.

При повторном клике на кнопку блок #spoiler снова должен скрываться.

Когда блок #spoiler отображается, должна быть возможность закрыть его нажатием клавиши Escape на клавиатуре

Когда блок #spoiler скрыт, клавиша Escape обрабатываться не должна.
 */

const sp = document.querySelector("#spoiler")
const btn = document.querySelector("#myBtn")
btn.addEventListener("click",()=>{
    sp.classList.toggle("show")
    isVisible = !isVisible;
})

let isVisible = false;

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && isVisible && document.activeElement !== btn) {
        // Здесь вы можете выполнять дополнительные действия перед закрытием
        // Например, скрыть элемент, выполнить анимацию и т.д.

        // Пример действия: скрыть элемент
        sp.classList.remove("show");
        isVisible = false;
    }
});