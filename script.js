var remainingTime = 0;
var score = 0;
var countdown;
var questionIndex = 0;

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
    score = 0;
    remainingTime = 100;
    document.getElementById("remainingTime").innerHTML = remainingTime;
    countdown = setInterval(function(){
        remainingTime--;
        document.getElementById("remainingTime").innerHTML = remainingTime;
        if (remainingTime == 0){
            clearInterval(countdown);
            showScore();
        }
    }, 100);
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
        if(questionIndex < questions.length){
            starting();
        }
        else{
            showScore();
        }
    }
    else{
        console.log("wrong")
        questionIndex++;
        remainingTime -= 5;
        document.getElementById("CorrectorIncorrect").textContent = "Incorrect";
        if(questionIndex < questions.length){
            starting();
        }
        else{
            showScore();
        }
    }
}

function showScore()
{
    clearInterval(countdown);
    document.getElementById("quizBody").style.display="none";
    document.getElementById("middle").style.display="none";
    document.getElementById("newscore").textContent = score;
    document.getElementById("yourScores").style.display="block";

}

// function storingScore(){
//     document.getElementById("submitquiz").addEventListener("click", savingscore)
// }

function savingscore(){
   if (document.getElementById("name").value === ""){
       alert("please enter your name to save your scores")
       return
   }

   var storedScore = localStorage.getItem("scores");
   var arrayScore = [];
   if (storedScore){
       arrayScore = JSON.parse(storedScore)
   }
   var playerscore = {
       name: document.getElementById("name").value,
       score: document.getElementById("newscore").textContent
   }

   arrayScore.push(playerscore)

   var savingArray = JSON.stringify(arrayScore);
    window.localStorage.setItem("high scores", savingArray);

    console.log(arrayScore)


}
