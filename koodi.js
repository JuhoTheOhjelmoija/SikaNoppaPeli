document.addEventListener("DOMContentLoaded", function () {
    let players = ["Pekka", "Matti"];
    let currentPlayer = 0;
    let roundScore = 0;
    let scores = [0, 0];

    document.getElementById("current-player").textContent = players[currentPlayer];

    document.getElementById("roll-dice").addEventListener("click", function () {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        document.getElementById("dice-image").src = `muut/kuvat/${diceRoll}.png`;

        if (diceRoll === 1) {
            roundScore = 0;
            switchTurn();
        } else {
            roundScore += diceRoll;
        }

        document.getElementById("round-score").textContent = roundScore;
    });

    document.getElementById("hold").addEventListener("click", function () {
        scores[currentPlayer] += roundScore;
        roundScore = 0;
        updateScores();
        switchTurn();
    });

    function switchTurn() {
        roundScore = 0;
        currentPlayer = (currentPlayer + 1) % players.length;
        document.getElementById("current-player").textContent = players[currentPlayer];
        document.getElementById("round-score").textContent = roundScore;
    }

    function updateScores() {
        let scoreText = players.map((p, i) => `${p}: ${scores[i]} pistettä`).join("<br>");
        document.getElementById("total-scores").innerHTML = scoreText;
    }
});
