let firstNumberElement=document.getElementById("firstNumber");
let secondNumberElement=document.getElementById("secondNumber");
let userInputElement=document.getElementById("userInput");
let gameResult =document.getElementById("gameResult");

function restartBtn()
{
    let firstRandomNumber=Math.random()*100;
    let secondRandomNumber=Math.random()*100;
    
    firstNumberElement.textContent=Math.ceil(firstRandomNumber);
    secondNumberElement.textContent=Math.ceil(secondRandomNumber);
    gameResult.textContent=""
    userInputElement.value=""
    
}
restartBtn()

function checkBtn()
{
    let firstRandomInteger=parseInt(firstNumberElement.textContent)
   let secondRandomInteger=parseInt(secondNumberElement.textContent);
   let userInputElementSum=parseInt(userInputElement.value);
   
   let sum = firstRandomInteger+secondRandomInteger
    
    if(userInputElementSum===sum)
    {
        gameResult.textContent="Congratulations! You got it right"
        gameResult.style.backgroundColor="Green"
    }
    else{
        gameResult.textContent="TRY AGAIN!"
        gameResult.style.backgroundColor="RED"
    }
}