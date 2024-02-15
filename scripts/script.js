

function handelKeybordKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log("Player Pressed", playerPressed)
    if (playerPressed === "Escape") {
        gameOver()
    }
    const currentAlphabetElement = document.getElementById('current-Alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    if (playerPressed === expectedAlphabet) {

        const currentScore = getTextElementValeById("current-Score")
        const updateScore = currentScore + 1;
        setTextElementVlueById("current-Score", updateScore);



        //^ ===================================================================
        // const currentScoreElement = document.getElementById("current-Score")
        // const currentScoreText = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText)
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    } else {
        const currentLife = getTextElementValeById("current-Life")
        const updateLife = currentLife - 1
        setTextElementVlueById("current-Life", updateLife)


        if (updateLife === 0) {
            gameOver();
        }


        //^ ==================================================
        // console.log("Dhur Right Key Press Koro")

        // const currentLifeElement = document.getElementById("current-Life")
        // const currentLifeText = currentLifeElement.innerText
        // const currentLife = parseInt(currentLifeText)
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
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
    hideElementById("ScoreGround");
    showElementById("playGorund");
    setTextElementVlueById("current-Life", 5)
    setTextElementVlueById("current-Score", 0)
    continueGame();

}
function gameOver() {
    hideElementById('playGorund')
    showElementById('ScoreGround')
    const lastScore = getTextElementValeById("current-Score")
    console.log(lastScore)
    setTextElementVlueById("game-Score", lastScore)
    const CurrentAlphabet = getElementTextById("current-Alphabet")
    console.log(CurrentAlphabet)
    removeBackgroundColorById(CurrentAlphabet)
}
