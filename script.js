var remainingTime = 0;
var score = 0;
var countdown;
var questionIndex = 0;

var questions = [
  {
    questionTitle: "Whats the full form of js",
    choices: ["a. javascript", "b. javas", "c. j script", "d. java snake"],
    answer: "a. javascript",
  },
  {
    questionTitle: "Inside which HTML element do we put the JavaScript?",
    choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
    answer: "d. <script>",
  },
  {
    questionTitle: "The 'function' and  'var' are known as:",
    choices: ["a. Keywords", "b. Data types", "c. Declaration statements", "d. Prototypes"],
    answer: "c. Declaration statements",
  },
  {
    questionTitle: "Which of the following variables takes precedence over the others if the names are the same?",
    choices: ["a. Global variable", "b. The local element", "c. The two of the above", "d. None of the above"],
    answer: "b. The local element",
  },
  {
    questionTitle: "Which one of the following is the correct way for calling the JavaScript code?",
    choices: ["a. Preprocessor", "b. Triggering Event", "c. RMI", "d. Function/Method"],
    answer: "d. Function/Method",
  },
  {
    questionTitle: "In the JavaScript, which one of the following is not considered as an error:",
    choices: ["a. Syntax error", "b. Missing of semicolons", "c. Division by zero", "d. Missing of Bracket"],
    answer: "c. Division by zero",
  },
  {
    questionTitle: "Which of the following number object function returns the value of the number?",
    choices: ["a. toString()", "b. valueOf()", "c. toLocaleString()", "d. toPrecision()"],
    answer: "b. valueOf()",
  },
  {
    questionTitle: "Which one of the following is an ternary operator:",
    choices: ["a. ?", "b. :", "c. -", "d. +"],
    answer: "a. ?",
  },
  {
    questionTitle: "Which one of the following operator returns false if both values are equal?",
    choices: ["a. !", "b. !==", "c. !=", "d. All of the above"],
    answer: "c. !=",
  },
  {
    questionTitle: "A collection of elements of the same data type which may either in order or not, is called?",
    choices: ["a. String", "b. Array", "c. Serialized Object", "d. Object"],
    answer: "b. Array",
  },
];

var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

function startquiz() {
  score = 0;
  document.getElementById("score").textContent = score;
  remainingTime = 100;
  questionIndex = 0;
  document.getElementById("remainingTime").innerHTML = remainingTime;
  countdown = setInterval(function () {
    remainingTime--;
    document.getElementById("remainingTime").innerHTML = remainingTime;
    if (remainingTime == 0) {
      clearInterval(countdown);
      showScore();
    }
  }, 1000);
  starting();
}

function starting() {
  document.getElementById("homeBody").style.display = "none";
  document.getElementById("quizBody").style.display = "block";
  document.getElementById("middle").style.display = "block";

  document.getElementById("question").textContent =
    questions[questionIndex].questionTitle;
  document.getElementById("choice1").textContent =
    questions[questionIndex].choices[0];
  document.getElementById("choice2").textContent =
    questions[questionIndex].choices[1];
  document.getElementById("choice3").textContent =
    questions[questionIndex].choices[2];
  document.getElementById("choice4").textContent =
    questions[questionIndex].choices[3];

  document.getElementById("choice1").addEventListener("click", select1);
  document.getElementById("choice2").addEventListener("click", select2);
  document.getElementById("choice3").addEventListener("click", select3);
  document.getElementById("choice4").addEventListener("click", select4);
}

function select1() {
  solution(0);
}
function select2() {
  solution(1);
}
function select3() {
  solution(2);
}
function select4() {
  solution(3);
}

function solution(choice) {
  if (
    questions[questionIndex].choices[choice] == questions[questionIndex].answer
  ) {
    questionIndex++;
    score++;
    document.getElementById("CorrectorIncorrect").textContent = "Correct";
    document.getElementById("score").textContent = score;
    if (questionIndex < questions.length) {
      starting();
    } else {
      showScore();
    }
  } else {
    questionIndex++;
    remainingTime -= 5;
    document.getElementById("CorrectorIncorrect").textContent = "Incorrect";
    if (questionIndex < questions.length) {
      starting();
    } else {
      document.getElementById("remainingTime").innerHTML = remainingTime;
      showScore();
    }
  }
}

function showScore() {
  clearInterval(countdown);
  document.getElementById("quizBody").style.display = "none";
  document.getElementById("middle").style.display = "none";
  document.getElementById("newscore").textContent = score;
  document.getElementById("yourScores").style.display = "block";
}

function savingscore() {
  if (document.getElementById("name").value === "") {
    alert("please enter your name to save your scores");
    return;
  }

  var storedScore = localStorage.getItem("scores");
  var arrayScore = [];
  if (storedScore) {
    arrayScore = JSON.parse(storedScore);
  }
  var playerscore = {
    name: document.getElementById("name").value,
    score: document.getElementById("newscore").textContent,
  };

  arrayScore.push(playerscore);

  var savingArray = JSON.stringify(arrayScore);
  window.localStorage.setItem("scores", savingArray);

  displayScores();
}

function displayScores() {
  document.getElementById("quizBody").style.display = "none";
  document.getElementById("yourScores").style.display = "none";
  document.getElementById("PreviousScores").style.display = "block";
  document.getElementById("middle").style.display = "none";
  document.getElementById("nav").style.display = "none";
  document.getElementById("homeBody").style.display = "none";
  var savedScores = localStorage.getItem("scores");

  if (savedScores == null) {
    return;
  }
  if (savedScores) {
    var AllScores = JSON.parse(savedScores);

    for (var i = 0; i < AllScores.length; i++) {
      var eachscore = document.createElement("p");
      eachscore.innerHTML = AllScores[i].name + " : " + AllScores[i].score;
      document.getElementById("AllScores").append(eachscore);
    }
  }
}

function clearScores() {
  window.localStorage.removeItem("scores");
  document.getElementById("AllScores").innerHTML = "";
}

function playagain() {
  document.getElementById("yourScores").style.display = "none";
  document.getElementById("PreviousScores").style.display = "none";
  document.getElementById("middle").style.display = "none";
  document.getElementById("nav").style.display = "inline-block";
  document.getElementById("homeBody").style.display = "block";
  document.getElementById("CorrectorIncorrect").textContent = "";
  localStorage.setItem("scores", "");
  remainingTime = 0;
  clearInterval(countdown);
  document.getElementById("remainingTime").innerHTML = remainingTime;
}

// function AllScores(){
//     displayScores();
//     // document.getElementById("quizBody").style.display = "none";
//     // document.getElementById("yourScores").style.display = "none";
//     // document.getElementById("PreviousScores").style.display = "block";
//     // document.getElementById("middle").style.display = "none";
//     // document.getElementById("nav").style.display = "none";
//     // document.getElementById("homeBody").style.display = "none";

// }
