

function handelKeybordKeyUpEvent(event) {
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-Alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    if (playerPressed === expectedAlphabet) {

        const currentScoreElement = document.getElementById("current-Score")
        const currentScoreText = currentScoreElement.innerText
        const currentScore = parseInt(currentScoreText)
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    } else {
        console.log("Dhur Right Key Press Koro")

        const currentLifeElement = document.getElementById("current-Life")
        const currentLifeText = currentLifeElement.innerText
        const currentLife = parseInt(currentLifeText)
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
    }
}
document.addEventListener("keyup", handelKeybordKeyUpEvent);



function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log("Your Random Alphabet", alphabet);
    const currentAlphabet = document.getElementById("current-Alphabet");
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);

}

function play() {
    hideElementById("home-Screen");
    showElementById("playGorund");
    continueGame();

}