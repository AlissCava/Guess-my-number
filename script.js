'use strict';


const secretNumber = Math.trunc(Math.random() * 20 ) + 1;

let score = 20;
let highscore = 0;

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
        if(score > 1){
            document.querySelector('.message').textContent = '📉noo it is to low';
            score--;
            document.querySelector('.score').textContent = score;
        }  
        else {
            document.querySelector('.message').textContent = '😭😭oh noo, you lost';
            document.querySelector('.score').textContent = 0;
        } 
    }
    else if (guess > secretNumber){
        if ( score > 1 ){
            document.querySelector('.message').textContent = '📈noo it is to hight';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '😭😭oh noo, you lost';
            document.querySelector('.score').textContent = 0;
        } 
       
    }
}) 