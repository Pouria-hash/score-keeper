const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const resetButton = document.querySelector('#reset')
let p1score = document.querySelector('#p1score')
let p2score = document.querySelector('#p2score')

let plusScoreP1 = 0;
let plusScoreP2 = 0;
let winning = 2;
let winner = false;

p1button.addEventListener('click', () => {
    if (!winner) {
        plusScoreP1 += 1;
        if (winning === plusScoreP1) {
            winner = true;
            p1score.classList.add('winner');
            p2score.classList.add('loser');
            p1button.disabled = true;
            p2button.disabled = true;

        } p1score.innerText = plusScoreP1;
    }

})
p2button.addEventListener('click', () => {
    if (!winner) {
        plusScoreP2 += 1;
        if (winning === plusScoreP2) {
            winner = true;
            p2score.classList.add('winner');
            p1score.classList.add('loser');
            p1button.disabled = true;
            p2button.disabled = true;

        } p2score.innerText = plusScoreP2;
    }
})

const selectScore = document.querySelector('#selectScore')
selectScore.addEventListener('change', function () {
    winning = parseInt(this.value)
    reset();

})

resetButton.addEventListener('click', reset)

function reset() {
    plusScoreP1 = 0;
    plusScoreP2 = 0;
    winner = false;
    p1score.innerText = 0;
    p2score.innerText = 0;
    p1score.classList.remove('winner', 'loser');
    p2score.classList.remove('loser', 'winner');
    p1button.disabled = false;
    p2button.disabled = false;

}