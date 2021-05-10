const p1 = {
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1score'),
    score: 0
}
const p2 = {
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2score'),
    score: 0
}

const resetButton = document.querySelector('#reset')
let winning = 2;
let winner = false;

function match(player, opponent) {
    if (!winner) {
        player.score += 1;
        if (winning === player.score) {
            winner = true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;

        }
        player.display.innerText = player.score;
        if (player.score === opponent.score & winning - player.score == 1) {
            winning++;
        }
    }
}

p1.button.addEventListener('click', function () {
    match(p1, p2);
})

p2.button.addEventListener('click', function () {
    match(p2, p1);
})

const selectScore = document.querySelector('#selectScore')
selectScore.addEventListener('change', function () {
    winning = parseInt(this.value)
    reset();

})

resetButton.addEventListener('click', reset)

function reset() {
    for (p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
    winner = false;
    winning = parseInt(selectScore.value)
}
