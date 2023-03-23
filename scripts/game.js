const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var gameOn = false;


$(document).keypress(function(){
    if (!gameOn) {
        nextSequence();
        gameOn = true;
        console.log("gameOn: " + gameOn)
    };
})

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");

    userPattern.push(userChosenColor);

    animatePress(userChosenColor);
    playSound(userChosenColor);
    
    console.log("userPattern: " + userPattern);

    checkAnswer(userPattern.length-1);
})

function checkAnswer(currentLevel){
    var success = false;
    if(userPattern[currentLevel] === gamePattern[currentLevel]){
        success = true;

        if(userPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }
    else {
        playSound("wrong");
        gameOver();
        success = false;
        startOver();
    }
    console.log("success: " + success);
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    
    gameOn = true;
    level++;
    userPattern = [];

    $("#level-title").text("Level " + level);
    
    gamePattern.push(randomChosenColor);
    
    var buttonID = "#" + randomChosenColor;
    $(buttonID).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColor);
    
    console.log("gamePattern: " + gamePattern);
}

function playSound(name){
    var colorSound = new Audio('sounds/' + name +'.mp3');
    colorSound.play();
}

function animatePress(currentColor){
    var buttonID = "#" + currentColor;
    $(buttonID).addClass("pressed");
    setTimeout(function(){
        $(buttonID).removeClass("pressed");
    },100);
}

function gameOver(){
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("#level-title").text("Game Over! Press any key to restart");
}

function startOver(){
    gamePattern = [];
    userPattern = [];
    level = 0;
    gameOn = false;
}
