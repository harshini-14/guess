let guessBox = document.getElementById("number-input");
let check = document.getElementById("guess");
let history = document.getElementById("history");
const randomNumber = Math.floor(Math.random()*100+1);
let count = 1;
let finalResult = false;
history.innerHTML = "";

function GuessingGame() {
    if (finalResult === false) {
        computeWinner();
        viewHistory();
        return finalResult;
    }
}   

function viewHistory() {
    let manualGuess = guessBox.value;
    history.innerHTML +=  "your guessed🤔🤔value🎊🎊🎊 " + manualGuess;

}

function computeWinner() {
    let result = document.getElementById("result");
    let guess = guessBox.value;

    if (count < 5) {
        if (randomNumber == guess) {
            result.innerHTML = "<h1>super!💥🤩🎊you reached🤝🥳!</h1>";
            finalResult = true;
        } else if (randomNumber < guess) {
            result.innerHTML = "<h1>You guessed too high!😲</h1>";
            finalResult = false;
        } else {
            result.innerHTML = "<h1>You guessed too Low!🙄</h1>";
            finalResult = false;
        }
        count ++;
    } else {
        if (randomNumber == guess) {
            result.innerHTML = "<h1>wow!🤩you reached👍🥳🤝</h1>";
            finalResult = true;
        }
        else {
            result.innerHTML = "<h1>oops!😔you failed👎</h1>";
            finalResult = true;
        }
    }
}



check.addEventListener("click", GuessingGame);
