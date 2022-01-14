var remainingTime = 0;
var score = 0;
var countdown;


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