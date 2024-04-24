'use strict';

//the check class with the click action start the function
document.querySelector('.check'),addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value); //imput numeber -> save in the guess const variable
    
    if (!guess){
        displayMessage('😒 No number!');
    }
}) 