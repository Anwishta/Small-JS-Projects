const guessInput = document.getElementById('guess');
const submitBtn = document.getElementById('submitGuess');
const resultDiv = document.getElementById('feedback');
const guessLeft = document.getElementById('guesses');
const alreadyGuessed = document.getElementById('alreadyGuessed');
const body = document.querySelector('.body')

let left = 10;
const randomNumber = Math.round(Math.floor(Math.random() * 100));

submitBtn.addEventListener('click', (e) => {

    if(left <= 0){
        resultDiv.innerHTML = "No more guesses left. The number was " + randomNumber;
        return;
    }
    
    const input = Number(guessInput.value);
    if (input === randomNumber) {
        resultDiv.innerHTML = "Congratulations!!! You guessed correctly";
    }else{
        resultDiv.innerHTML = "Sorry"
    }
    left--;
    guessLeft.innerHTML = left;

    alreadyGuessed.innerHTML += input + '  ';

})