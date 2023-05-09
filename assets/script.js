// create start button
function hide() {
  document.getElementById("intro").hidden = true;
  document.getElementById("start").hidden = true;
}

function show() {
  document.getElementById("tracker").hidden = false;
  document.getElementById("time").hidden = false;
}

//document.getElementByClass("start").addEventListener("click", show);
var startEl = document.querySelector(".start");
// function to start timer when start button is clicked, not when page opems - 09 Timer Intervals
// event.preventDefault();
// Selects element by class

//timer elements:
var mainEl = document.querySelector(".main");
var timeEl = document.querySelector("#time");
var trackerEl = document.querySelector("#tracker");
var counterEl = document.querySelector("#counter");
var secondsLeft = 10;

// final score - local storage objects

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    trackerEl.textContent = "Quiz Time Tracker";
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
var questions = [
  {
    question: "What is HTML?",
    answers: {
      a: "3",
      b: "5",
      c: "115",
    },
    correctAnswer: "b",
  },
  {
    question: "What is 30/3?",
    answers: {
      a: "3",
      b: "5",
      c: "10",
    },
    correctAnswer: "c",
  },
];

console.log(questions);

/*
function startQuiz(setTime, showQuestion) {

}
*/

// fuction for retrieving question with answer choices
/* function showQuestion (questions, quizContainer) {
  // we'll need a place to store the output and the answer choices
	var output = [];
	var answers;
  for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
  quizContainer.innerHTML = output.join('');
}
*/

// run above function
// showQuestions(questions, quizContainer);

// function for showing results
/*
function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct move on to next question
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank, decrement the score
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
// or score and replace h2 span in html
// counterEl.textContent = "Current Score: " + score;
}
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}

*/

// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "HTML stands for",
    a: [
      { text: "How To Make Lunch", isCorrect: false },
      { text: "Happy Text Markup Language", isCorrect: false },
      { text: "Hyper Text Markup Language", isCorrect: true },
      { text: "mumbai", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "What is the capital of Thailand?",
    a: [
      { text: "Lampang", isCorrect: false, isSelected: false },
      { text: "phuket", isCorrect: false },
      { text: "Ayutthaya", isCorrect: false },
      { text: "Bangkok", isCorrect: true },
    ],
  },
  {
    id: 2,
    q: "What is the capital of Gujarat",
    a: [
      { text: "surat", isCorrect: false },
      { text: "vadodara", isCorrect: false },
      { text: "gandhinagar", isCorrect: true },
      { text: "rajkot", isCorrect: false },
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

  var selected = "";

  // Show selection for op1
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
  const evaluate = document.getElementsByClassName("evaluate");

  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
    } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
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
  if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
  }
});

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
  // add + finalScore variable or replace img with final score
  // hide Quiz time tracker section to include .time and #counter
  timeEl.textContent = "End of game! Your score is ";
  //var imgEl = document.createElement("img");
  //imgEl.setAttribute("src", "images/image_1.jpg");
  //mainEl.appendChild(imgEl);
}

setTime();
//prompt for player's initials and save to localstorage
