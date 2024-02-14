// function play(){
//     // hide the home screen section
//     const homeSection= document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playSection = document.getElementById('play-ground');
//     playSection.classList.remove('hidden');

//     // show the play ground

// }
function handleKeybordButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed:',playerPressed);
    
    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    // console.log(currentAlphabetElement.innerText);
    const currentAlphabet = currentAlphabetElement.innerText;
    const currentAlphabetLower= currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed,currentAlphabetLower);

    // checked match or not 
    if(playerPressed === currentAlphabetLower){
        removeBgColorById(currentAlphabetLower);
        continueGame();
    }
    else{
        console.log('wrong press');
    }

}
// capture keybord key press
document.addEventListener('keyup', handleKeybordButtonPress);



function continueGame(){
    // step: random generate 
    const alphabet = getRandomAlphabet();
    // display the random alphabet
     const currentAlphabetElement = document.getElementById('current-alphabet');
     currentAlphabetElement.innerText = alphabet ;
    
//   set bg color
setBgColorById(alphabet);

}

function play(){
    hideElementById('home');
    showElementById("play-ground");
    continueGame();
}
