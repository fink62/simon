const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];

function nextColor() {
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    return randomChosenColor;
}

function playGamePattern(gamePattern) {
    for (let i = 0; i < gamePattern.length; i++){
        
        var buttonID = "#" + gamePattern[i];
        $(buttonID).fadeOut(100);
        $(buttonID).fadeIn(100);
        playSound(gamePattern[i]);
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

$(document).keydown(function(){
    
    gamePattern.push(nextColor());

    playGamePattern(gamePattern);

    $(".btn").click(function(){
        var userChosenColor = $(this).attr("id");
        userPattern.push(userChosenColor);
        animatePress(userChosenColor);
        playSound(userChosenColor);
    })
    
})

