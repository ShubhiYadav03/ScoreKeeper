const p1 = {
    name: document.querySelector('#p1name'),
    score: 0,
    button: document.querySelector('#p1'),
    display: document.querySelector('#p1display'),
    win: document.querySelector('#plwins')
};
const p2 = {
    name: document.querySelector('#p2name'),
    score: 0,
    button: document.querySelector('#p2'),
    display: document.querySelector('#p2display'),
    win: document.querySelector('#p2wins')
};
// const winner = document.createElement('h1').classList.add('has-text-danger', 'is-1', 'title');
// winner.textContent = 'WINNER!!!'

p1.name.addEventListener('input', function () {
    p1.button.textContent = `+1 ${p1.name.value}`
})
p2.name.addEventListener('input', function () {
    p2.button.textContent = `+1 ${p2.name.value}`
})

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#players');
let isGameOver = false;

let winningScore = 3;
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            // player.win.append(winner);
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
})

resetButton.addEventListener('click', reset);
function reset() {
    for (p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    isGameOver = false;
}
