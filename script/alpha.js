// function play(){
//     // hide the home screen section
//     const homeSection= document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playSection = document.getElementById('play-ground');
//     playSection.classList.remove('hidden');

//     // show the play ground

// }
function handleKeybordButtonPress(event) {
    const playerPressed = event.key;
    console.log(playerPressed);
    // stop game if press esc key
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    // console.log(currentAlphabetElement.innerText);
    const currentAlphabet = currentAlphabetElement.innerText;
    const currentAlphabetLower = currentAlphabet.toLocaleLowerCase();


    // checked match or not 
    if (playerPressed === currentAlphabetLower) {
        removeBgColorById(currentAlphabetLower);
        continueGame();
        // score update
        // get the curren score and increase 
        // show the updatd score

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreValue = currentScoreElement.innerText;
        const currentScoreNumber = parseInt(currentScoreValue);

        const newScore = currentScoreNumber + 1;
        currentScoreElement.innerText = newScore;

    }
    else {
        // get the current life no
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
        if (newLife === 0) {
            gameOver();
        }

    }

}
// capture keybord key press
document.addEventListener('keyup', handleKeybordButtonPress);



function continueGame() {
    // step: random generate 
    const alphabet = getRandomAlphabet();
    // display the random alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //   set bg color
    setBgColorById(alphabet);

}

function play() {
    hideElementById('home');
    hideElementById('score')
    showElementById("play-ground");
    setElementValueById('current-life', 5);
    setElementValueById('current-score', 0);
    continueGame();
}
function gameOver() {
    hideElementById('play-ground');
    showElementById("score");

    // update final score
    const lastScore = document.getElementById('current-score');
    const fScoreNo = lastScore.innerText;
    setElementValueById('total-score', fScoreNo);
    //    cleart the last alphabet higilite
    const currentAlphabet = getTextElementById('current-alphabet');
    removeBgColorById(currentAlphabet);
}
