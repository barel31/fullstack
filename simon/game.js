let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;

$(document).keydown(function (event) {
    if (!started) {
        nextSequence();
        $("#level-title").html("Level " + level);
        started = true;
    }
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").html("Level " + level);
    let random = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[random];
    gamePattern.push(randomChosenColor);

    // $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    // playSound(randomChosenColor);
    for (let i = 0; i < gamePattern.length; i++) {
        setTimeout(function () {
            let color = $("#" + gamePattern[i]);
            color.fadeOut(100).fadeIn(100).fadeIn(100);
            playSound(gamePattern[i]);
        }, 300 * i + 1);
    }
}

$(".btn").click(function (event) {
    if (!started) {
        return;
    }
    let userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length);
});

function playSound(name) {
    let sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(currentColor) {
    let colorElement = $("#" + currentColor);
    colorElement.addClass("pressed");

    setTimeout(function () {
        colorElement.removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (
        userClickedPattern[currentLevel - 1] === gamePattern[currentLevel - 1]
    ) {
        if (currentLevel === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 1000);
        $("#level-title").html(
            "Game Over (Lvl." + (level - 1) + "), Press Any Key to Restart"
        );
        startOver();
    }
}

function startOver() {
    level = 0;
    started = false;
    gamePattern = [];
}
