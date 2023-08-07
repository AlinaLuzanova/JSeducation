var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это несъедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(guessedAnswer) {
        for (let i=0; i<=this.tries; i++){
        if (this.correctAnswer === guessedAnswer){
            console.log('Правильный ответ!')
            alert('Правильный ответ!')
            break;
        } else if (i === 1){
            console.log(this.hints[0])
            }
        else if (i === 2){
            console.log(this.hints[1])
        }
        else if (i === 3){
            console.log(this.correctAnswer)
        }
    console.log('спасибо за игру')}
}}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementsByTagName('input')[0];

    var guessedAnswer = input.value;

    if (guessedAnswer) {
        newAnswer = checkAnswer(guessedAnswer)
        console.log(newAnswer)
    }
}