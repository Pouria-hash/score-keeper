const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const resetbutton = document.querySelector('#reset');
let p1score = 0;
let p2score = 0;
let winningScore = 5;
let gameover = false;
p1button.addEventListener('click', function () {
    if (!gameover) {
        p1score += 1;
        if (p1score === winningScore) {
            gameover = true;
            p1display.classList.add('winner')
            p2display.classList.add('loser')

        } p1display.innerText = p1score;
    }
})
p2button.addEventListener('click', function () {
    if (!gameover) {
        p2score += 1;
        if (p2score === winningScore) {
            gameover = true;
            p2display.classList.add('winner')
            p1display.classList.add('loser')
        } p2display.innerText = p2score;
    }
})

resetbutton.addEventListener('click', reset)

function reset() {
    p1score = 0;
    p2score = 0;
    p1display.innerText = 0;
    p2display.innerText = 0;
    gameover = false;
    p1display.classList.remove('winner', 'loser')
    p2display.classList.remove('loser', 'winner')
}