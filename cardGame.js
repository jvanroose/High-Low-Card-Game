var cardHTML = document.getElementById("card");
var scoreHTML = document.getElementById("score");
var resultHTML = document.getElementById("result");

var possibleCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var previousCard = 0;
var randomNumber = 0;

var numQuestionsAsked = 0;
var numCorrect = 0;


function resetCardGame(){
    previousCard = generateCard();
    cardHTML.innerText = previousCard; 

    resultHTML.innerText = "You were: ";
    scoreHTML.innerText = "You've got " + numCorrect + "/" + numQuestionsAsked + " correct.";
}

function submitGuess(highLowGuess){
    var newCard = generateCard();
    var correctGuess = guessCard(highLowGuess, newCard);
    updateScores(correctGuess);
    modifyCardGameHTML(correctGuess);
    setPreviousCard(newCard);
}

function generateCard(){    
    randomNumber = 0;
    var randomCard = 0;
    
    do{
        randomNumber = Math.floor(Math.random() * possibleCards.length);
        randomCard = possibleCards[randomNumber];
    } while (previousCard === randomCard);
    
    return randomCard
}

function guessCard(highLowGuess, newCard){
    var correctGuess;
    
    if(highLowGuess === "Higher"){        
        if(newCard > previousCard){
            correctGuess = true;
        }
        else {
            correctGuess = false;
        }
    }
    else if(highLowGuess === "Lower"){
        if(newCard < previousCard){
            correctGuess = true;
        }
        else {
            correctGuess = false;
        }
    }
    else {
        console.log("No guess provided");
        correctGuess = false;
    }
    
    return correctGuess;
}

function updateScores(correctGuess){
    if(correctGuess){
        numCorrect++;        
    }
    
    numQuestionsAsked++;
}

function modifyCardGameHTML(correctGuess){
    var resultString = "";
    
    if(correctGuess){
        resultString = "Correct";
    } else resultString = "Incorrect";
    
    resultHTML.innerText = "You were: " + resultString;
    scoreHTML.innerText = "You've got " + numCorrect + "/" + numQuestionsAsked + " correct.";
}

function setPreviousCard(newCard){
    previousCard = newCard;
    cardHTML.innerText = previousCard;
}

resetCardGame();