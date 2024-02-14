// function play(){
//     // hide the home screen section
//     const homeSection= document.getElementById('home');
//     homeSection.classList.add('hidden');

//     const playSection = document.getElementById('play-ground');
//     playSection.classList.remove('hidden');

//     // show the play ground

// }

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
