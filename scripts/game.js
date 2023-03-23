const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var gameOn = 0;

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gameOn = 1;
    level++;
    gamePattern.push(randomChosenColor);
    var buttonID = "#" + randomChosenColor;
    $(buttonID).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

function playGamePattern(gamePattern) {
    for (let i = 0; i < gamePattern.length; i++){
 
    }
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

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userPattern.push(userChosenColor);
    animatePress(userChosenColor);
    playSound(userChosenColor);
})

$(document).keypress(function(){
    if (gameOn === 0) {
        nextSequence()
    };
})

