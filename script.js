var remainingTime = 0;
var score = 0;
var countdown;
var questionIndex = 0
var score = 0

var questions =[{
    questionTitle: "Whats the full form of js",
    choices: ["javascript","javas", "j script", "java snake"],
    answer: "javascript"
}, 
{
    questionTitle: "Inside which HTML element do we put the JavaScript?",
    choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
    answer: "d. <script>"
}]

var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")
var choice4 = document.getElementById("choice4")

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
    document.getElementById("homeBody").style.display="none";
    document.getElementById("quizBody").style.display="block";
    document.getElementById("middle").style.display="block";

    document.getElementById("question").textContent = questions[questionIndex].questionTitle;
    document.getElementById("choice1").textContent = questions[questionIndex].choices[0];
    document.getElementById("choice2").textContent = questions[questionIndex].choices[1];
    document.getElementById("choice3").textContent = questions[questionIndex].choices[2];
    document.getElementById("choice4").textContent = questions[questionIndex].choices[3];

    document.getElementById("choice1").addEventListener("click", select1);
    document.getElementById("choice2").addEventListener("click", select2);
    document.getElementById("choice3").addEventListener("click", select3);
    document.getElementById("choice4").addEventListener("click", select4);

    if (questionIndex > questions.length - 1) {
        return;
    } 

    
}

function select1(){
    console.log("option 1")
    solution(0);
}
function select2(){
    solution(1);
}
function select3(){
    solution(2);
}
function select4(){
    solution(3);
}

function solution(choice){

    console.log(questions[questionIndex].choices[choice]);

    if(questions[questionIndex].choices[choice] == questions[questionIndex].answer){
        console.log("correct")
        questionIndex++;
        score++;
        document.getElementById("CorrectorIncorrect").textContent = "Correct";
        document.getElementById("score").textContent = score;
        starting();
    }
    else{
        console.log("wrong")
        questionIndex++;
        remainingTime -= 5;
        document.getElementById("CorrectorIncorrect").textContent = "Incorrect";
        starting();
    }
}

