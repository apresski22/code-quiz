// create start button

// function to start timer when start button is clicked, not when page opems - 09 Timer Intervals
//
// Selects element by class

//timer elements:
var mainEl = document.querySelector(".main");
var timeEl = document.querySelector(".time");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // hide "Quiz time tracker element" hideTracker - can it go in sendMessage function?
      // Calls function to create and append image
      sendMessage();
      // call startQuiz function
    }
  }, 1000);
}

// when timer starts a question is presented
/*
function startQuiz() {

}
*/

// another question is presented when the previous one is answered - event bubbling

// decrement function for incorrect answer - local storage
// if answer == true, keep timer going, if answer !=, decrement i-- from timer
/*var counter = document.querySelector("#counter");

var submitButton = document.querySelector("#counter");

var count = localStorage.getItem("count");

counter.textContent = count;
// get counter to go past zero into negatives. function below stops decrementing when it gets to zero
submitButton.addEventListener("click", function () {
  if (count > 0) {
    count--;
    counter.textContent = count;
    localStorage.setItem("count", count);
  }
});

*/
//game over prompt when timer ends and all questions are answered

//Selects element by id

function sendMessage() {
  // add + finalScore or replace img with final score
  // hide Quiz time tracker section to include .time and #counter
  timeEl.textContent = "End of game! Your score is ";
  //var imgEl = document.createElement("img");
  //imgEl.setAttribute("src", "images/image_1.jpg");
  //mainEl.appendChild(imgEl);
}

setTime();
//prompt for player's initials and save to localstorage
