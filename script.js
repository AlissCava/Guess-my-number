'use strict';


let secretNumber = Math.trunc(Math.random() * 20 ) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = '?';

//the check class with the click action start the function
document.querySelector('.check'),addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value); //imput numeber -> save in the guess const variable
    
    if (!guess){
        document.querySelector('.message').textContent = '😒 No number!';
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = '🎉🎉WOOOOOOO PERFECT';
        document.querySelector('body').style.backgroundColor = '#dcffd2'
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
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

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    score = 20;

    document.querySelector('.message').textContent = 'start again';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#ffbfe9'

});









///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/