'use strict';

const secretNumber = Math.trunc(Math.random() * 20 ) + 1;
document.querySelector('.number').textContent = secretNumber;

//the check class with the click action start the function
document.querySelector('.check'),addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value); //imput numeber -> save in the guess const variable
    
    if (!guess){
        document.querySelector('.message').textContent = '😒 No number!';
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉🎉WOOOOOOO PERFECT';
    }
    else if (guess < secretNumber){
        document.querySelector('.message').textContent = '📉noo it is to low';
    }
    else if (guess > secretNumber){
        document.querySelector('.message').textContent = '📈noo it is to hight';
    }
}) 