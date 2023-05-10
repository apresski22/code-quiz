// Questions will be asked
function startButton() {
  //show hidden tracker, time, counter, question and option elements
  function hide() {
    //consolidate and hide entire header, div and children
    //document.getElementsByClassName("start").hidden = true;
    //document.getElementsByClassName("container").hidden = true;
    document.getElementById("intro").hidden = true;
    document.getElementById("start").hidden = true;
  }
  //code below doesn't hide/unhide
  function show() {
    document.getElementById("time").style.visibility = "visible";
    document.getElementById("score").hidden = false;
    document.getElementById("counter").hidden = false;
  }

  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds";

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
  hide();
  show();
  setTime();
}

//document.getElementByClass("start").addEventListener("click", show);
var startEl = document.querySelector(".start");

//timer elements:
var timeEl = document.querySelector("#time");
var trackerEl = document.querySelector("#tracker");
var counterEl = document.querySelector("#counter");
var secondsLeft = 10;

// final score - local storage objects
function sendMessage() {
  // add + finalScore variable or replace img with final score
  // hide Quiz time tracker section to include .time and #counter
  alert("End of game! Your score is ");
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds";
    if (secondsLeft === -1) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // hide "Quiz time tracker element" hideTracker - can it go in sendMessage function?
      // Calls function to create and append image
      sendMessage();

      // call startQuiz function
    }
  }, 1000);
}
//code below isn't working now

// function for showing results

// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "HTML stands for",
    a: [
      { text: "How To Make Lunch", isCorrect: false },
      { text: "Happy Text Markup Language", isCorrect: false },
      { text: "HyperText Markup Language", isCorrect: true },
      { text: "It doesn't stand for anything", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "JavaScript is",
    a: [
      {
        text: "a popular bookstore in New York",
        isCorrect: false,
        isSelected: false,
      },
      { text: "a type of font", isCorrect: false },
      { text: "easy to learn", isCorrect: false },
      { text: "the main programming language for websites", isCorrect: true },
    ],
  },
  {
    id: 2,
    q: "To comment out a line in CSS use",
    a: [
      { text: "<!--", isCorrect: false },
      { text: "#", isCorrect: false },
      { text: "/*", isCorrect: true },
      { text: "//", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "What is the difference between hoisting and scoping",
    a: [
      { text: "<!--", isCorrect: false },
      { text: "#", isCorrect: false },
      { text: "/*", isCorrect: true },
      { text: "//", isCorrect: false },
    ],
  },
];

// Set start
var start = true;

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";
  // Getting the score display section

  // Getting the question
  const question = document.getElementById("question");

  // Setting the question text
  question.innerText = Questions[id].q;

  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  /* themeButtonEl.on("click", function () {

  })
*/
  // Show selection for op1
  //11- event listener 1:03 Web APIs day2
  var selected = "";
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
  });

  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
  });

  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
  });

  // Grabbing the evaluate button

  /*var evaluate = document.getElementsByClassName("evaluate");
function setCounterText() {
  evaluate.textContent = count;
}
evaluate[0].addEventListener("click", () {
  if (selected === false) {
    count--;
    setCounterText();
    //localStorage.setItem("evaluate", count);
  }
});
*/

  var evaluate = document.getElementsByClassName("evaluate");
  var decrementEl = document.getElementsByClassName("evaluate");
  var countEl = document.querySelector("#counter");

  evaluate[0].addEventListener("click", () => {
    if (selected == "false") {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
    function setCounterText() {
      countEl.textContent = count;
      // Attach event listener to decrement button element
      decrementEl[0].addEventListener("click", () => {
        // Action will fire if count is greater than  0
        if (selected == "false") {
          count--;
          console.log(count);
        }
      });
      setCounterText();
    }
    //else {
    //result[0].innerHTML = "False";
    //result[0].style.color = "red";
    //count--;
    //setCounterText();
    //localStorage.setItem("evaluate", count);
    //}
  });
}
if (start) {
  iterate("0");
}

// Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 3) {
    id++;
    iterate(id);
    console.log(id);
  }
});

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

//prompt for player's initials and save to localstorage
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};
