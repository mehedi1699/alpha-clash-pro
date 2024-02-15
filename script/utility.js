function hideElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}
function removeBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getRandomAlphabet(){
    // create a alphabet arr 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    
    // get random value 0 to 25
    const randomNumber = Math.random()*25;
    const indexNumber = Math.round(randomNumber);
   
    const alphabet = alphabets[indexNumber];
    return alphabet;
}
function setElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText= value;
}

function getTextElementById(elementid){
    const element= document.getElementById(elementid);
    const text = element.innerText;
    return text;
}