let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber= Math.ceil(Math.random()*100);

function checkGuess() {
    let gnumber= parseInt(userInput.value);

    if(gnumber>randomNumber)
    {
        gameResult.textContent="Too High! Try Again";
        gameResult.style.color="white";
    }
    else if(gnumber<randomNumber)
    {
        gameResult.textContent="Too Low! Try Again";
        gameResult.style.color="White";
    }
    else if(gnumber===randomNumber){
        gameResult.textContent="Congratulations You have Guessed Correct Number";
        gameResult.style.color="White";
        gameResult.style.backgroundColor="Green";
    }
    else
    {
        gameResult.textContent="Invaild Number";
        gameResult.style.color="White";   
    }
 
}