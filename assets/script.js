// Questions will be asked
var secondsLeft;
var questionIndex;
function startQuiz() {
  document.getElementsByTagName("header")[0].classList.add("hide");
  document.getElementById("score").classList.remove("hide");
  document.getElementById("tracker").classList.remove("hide");
  document.getElementById("next-question").classList.remove("hide");
  document.querySelector(".question-container").classList.remove("hide");
  secondsLeft = 10;
  questionIndex = 0;
  startTimer();
  showQuestion();
}

//Do I have an element for it to go? Because i Need to control where It will go.
// I have to select the element
//What do I want to manipulate about the element
//Is it changing the content? innerHTML/textContent
//am I creating new elements for it?
//I need to style the elemnts I create, set their content, and append them to my target element
function showQuestion() {
  // we want it to work for any question
  var currentQuestion = questionBank[questionIndex];
  document.getElementById("question").innerHTML = currentQuestion.question;
  var optionContainer = document.querySelector(".option-container");
  optionContainer.innerHTML = "";
  for (let i = 0; i < currentQuestion.answer.length; i++) {
    var newButton = document.createElement("button");
    newButton.innerHTML = currentQuestion.answer[i].text;
    if (currentQuestion.answer[i].isCorrect == true) {
      //research what you can do to the html element so than wen you check something baout the elemtn in event.target, you will know if it's right or wrong
      //set attribute,
      //get attribute to check answer
    }
    newButton.addEventListener("click", checkAnswer);
    optionContainer.append(newButton);
  }
  var nextQuestion = document.getElementById("next-question");
  nextQuestion.addEventListener("click", checkIfNextQuestionOrOver);
}

function checkAnswer(event) {
  console.log("Checking answer");
  console.log(event.target);
  //add html element to display result
  //we can do html element things to event.targer
}
//when we answer answer question, we want to know if we can move to the next the next questioN?
function checkIfNextQuestionOrOver() {
  if (questionIndex === questionBank.length - 1) {
    endQuiz();
  } else {
    questionIndex += 1;
    showQuestion();
  }
}
//timer elements:
var timeEl = document.querySelector("#time");
var trackerEl = document.querySelector("#tracker");
var counterEl = document.querySelector("#counter");

// final score - local storage objects
function endQuiz() {
  prompt("End of game! Enter your initials to save your score.");
}

function startTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds";
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}
// function for showing results

// Questions will be asked
const questionBank = [
  {
    question: "HTML stands for",
    answer: [
      { text: "How To Make Lunch", isCorrect: false },
      { text: "Happy Text Markup Language", isCorrect: false },
      { text: "HyperText Markup Language", isCorrect: true },
      { text: "It doesn't stand for anything", isCorrect: false },
    ],
  },
  {
    question: "JavaScript is",
    answer: [
      {
        text: "answer popular bookstore in New York",
        isCorrect: false,
      },
      { text: "answer type of font", isCorrect: false },
      { text: "easy to learn", isCorrect: false },
      { text: "the main programming language for websites", isCorrect: true },
    ],
  },
  {
    question: "To comment out answer line in CSS use",
    answer: [
      { text: "<!--", isCorrect: false },
      { text: "#", isCorrect: false },
      { text: "/*", isCorrect: true },
      { text: "//", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is not an array method",
    answer: [
      { text: "push()", isCorrect: false },
      { text: "concat()", isCorrect: false },
      { text: "upperCase()", isCorrect: true },
      { text: "flatMap()", isCorrect: false },
    ],
  },
];

// Set start is last line 277
//var start = true;

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";
  // Getting the score display section

  // Getting the question
  //const question = document.getElementById("question");

  // Setting the question text
  //question.innerText = Questions[id].question;

  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = Questions[id].answer[0].text;
  op2.innerText = Questions[id].answer[1].text;
  op3.innerText = Questions[id].answer[2].text;
  op4.innerText = Questions[id].answer[3].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].answer[0].isCorrect;
  op2.value = Questions[id].answer[1].isCorrect;
  op3.value = Questions[id].answer[2].isCorrect;
  op4.value = Questions[id].answer[3].isCorrect;

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

  var decrementEl = document.getElementsByClassName("evaluate");
  var countEl = document.querySelector("#counter");

  // evaluate[0].addEventListener("click", () => {
  //   if (selected == "false") {
  //     result[0].innerHTML = "False";
  //     result[0].style.color = "red";
  //   }
  //   function setCounterText() {
  //     countEl.textContent = count;
  //     // Attach event listener to decrement button element
  //     decrementEl[0].addEventListener("click", () => {
  //       // Action will fire if count is greater than  0
  //       if (selected == "false") {
  //         count--;
  //         console.log(count);
  //       } else {
  //         count++;
  //       }
  //     });
  //     setCounterText();
  //   }
  // });
}

// if (start) {
//   iterate("0");
// }

// // Next button and method
// const next = document.getElementsByClassName("next")[0];
// var id = 0;

// next.addEventListener("click", () => {
//   start = false;
//   if (id < 3) {
//     id++;
//     iterate(id);
//     console.log(id);
//   }
// });

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

document.getElementById("start").addEventListener("click", startQuiz);
