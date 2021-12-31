function Refresh() {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let players = document.getElementsByClassName("img");
    players[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
    players[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

    let result = document.getElementById("h1");
    if (randomNumber1 > randomNumber2) {
        result.textContent = " 🚩Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        result.textContent = "Player 2 Wins! 🚩";
    } else {
        result.textContent = "🎌Draw!🎌";
    }
}
Refresh();
// TODO: Add history outpot
