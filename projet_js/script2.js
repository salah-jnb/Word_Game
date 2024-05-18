const buttonElements = document.querySelectorAll('button');
let row = 1;
let letter = 1;
const dictionary = ['PLANE', 'HOUSE', 'HORSE', 'CHAIR', 'CLOUD', 'DANCE', 'GRAPE', 'OCEAN', 'PLANT', 'SMILE'];

const state = {
    secret: dictionary[Math.floor(Math.random() * dictionary.length)],
};
console.log("Secret word:", state.secret);
const wordElements = document.querySelectorAll('.word-row');
let gameOver = false;
let guessedCorrectly = false;
buttonElements.forEach((element) => {
    element.addEventListener('click', function() {
        keypress(element.innerText);
    });
});

function populateWord(key){
    if (letter < 6){
     wordElements[row - 1].querySelectorAll('.word')[letter - 1].innerText = key;
    letter += 1;   
    }
    
}
function checkWord(){
    let NbCl = 0;
    const letterElements = wordElements[row - 1].querySelectorAll('.word'); 
    letterElements.forEach((element,index) => {
     const indexLetterInWord = state.secret.indexOf(element.innerText.toUpperCase());

     if (indexLetterInWord === index){
        NbCl += 1;
        element.classList.add('word-green');
        col_key(element.innerText,"green")
     }else if (indexLetterInWord > -1){
        element.classList.add('word-orange');
        col_key(element.innerText,"orange")
     }else {
        element.classList.add('word-grey');
        col_key(element.innerText,"grey")
     }
    });
    if (NbCl === 5){
        gameOver = true;
        guessedCorrectly = true;
        alert('congratulations! You have guesssed the word of the day.')
    }else if(row === 6){
        gameOver = true;
        alert('Better luck next time. the word of the day was : ' +state.secret)
    }
}
function col_key(c,couleur){
    key=document.querySelectorAll('.keypad');
    key.forEach((k) => {
        if(k.innerText==c){
            k.style.backgroundColor=couleur
        }
    })
}

function enterWord (){
    if (letter < 6 ) {
       alert("not enough letters");
    } else {
        checkWord();
        row += 1;
        letter = 1;
    }
}

function deleteLetter() {
    const letterElements = wordElements[row - 1].querySelectorAll('.word');
    for (let index = letterElements.length - 1; index >= 0; index--) {
        const element = letterElements[index];
        if (element.innerText !== ''){
            element.innerText = '';
            letter -= 1;
            break; 
        }    
    }
}

function keypress(key){
    if (!gameOver){
    if (key.toLowerCase() === 'enter') {
      enterWord(); 
    } else if (key.toLowerCase() === 'del') {
        deleteLetter();
    } else {
        populateWord(key);
    }}else{
        alert('Game over ! ')
    }
}