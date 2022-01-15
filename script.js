var remainingTime = 0;
var score = 0;
var countdown;
var questionIndex = 0

var questions =[{
    questionTitle: "Whats the full form of js",
    choices: ["javascript","javas", "j script", "java snake"],
    answer: "javascript"
}]


function startquiz(){

    remainingTime = 100;
    document.getElementById("remainingTime").innerHTML = remainingTime;
    countdown = setInterval(function(){
        remainingTime--;
        document.getElementById("remainingTime").innerHTML = remainingTime;
        if (remainingTime == 0){
            clearInterval(countdown);
        }
    }, 1000);
    starting();
}

function starting(){
    document.getElementById("homeBody").style.display="none"
    document.getElementById("quizBody").style.display="block"

    document.getElementById("question").textContent = questions[questionIndex].questionTitle;
    document.getElementById("choice1").textContent = questions[questionIndex].choices[0];
    document.getElementById("choice2").textContent = questions[questionIndex].choices[1];
    document.getElementById("choice3").textContent = questions[questionIndex].choices[2];
    document.getElementById("choice4").textContent = questions[questionIndex].choices[3];

    questionIndex++;
    if (questionIndex > questions.length - 1) {
        return;
    } 

    var content = "<h2" + questions[questionIndex].question + "<h2>"; 
    // for (var i= )
    document.getElementById("quizBody").innerHTML = quizContent;
}