const buttonColour = ["red", "blue", "green", "yellow"];

const gamePattern = [];
const userClickedPattern = [];

let isKeyPressed = false;
let level = 0;
let checkLevel = 0;

function checkAnswer(currentLevel) {

    if (gamePattern[checkLevel] === userClickedPattern[checkLevel]) {
        console.log("success");

        setTimeout(() => {
            checkLevel++;

            if (checkLevel === gamePattern.length) {
                nextSequence();

                checkLevel = 0;
                userClickedPattern.length = 0;
            }
        }, 1000);
        
    } else {
        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");

        gamePattern.length = 0;
        userClickedPattern.length = 0;
        checkLevel = 0;
        level = 0;

        //startOver();
    }
    
}

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColour[randomNumber];
    const levelTitle = $('#level-title');
    
    gamePattern.push(randomChosenColour);

    animatePress(randomChosenColour);

    levelTitle.text(`Level ${level}`);

    level++;
}

function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);

    audio.play();
}

function animatePress(currentColour) {
    $(`#${currentColour}`).addClass("pressed");

    setTimeout(() => {
        $(`#${currentColour}`).removeClass("pressed");
    }, 100);
}

$(".btn").click(function() {
    const userChosenColour = $(this).attr("id");

    if (!isKeyPressed) {
        return;
    }

    userClickedPattern.push(userChosenColour);

    $(this)
        .animate({ opacity: 0.2 }, 100)
        .animate({ opacity: 1 }, 100, () => {
            playSound(userChosenColour);
            animatePress(userChosenColour);
            checkAnswer(userClickedPattern.length - 1);
    });
});

$(document).keydown(function(event) {
    if (gamePattern.length === 0 && event.key === "a") {
        nextSequence();

        isKeyPressed = true;
    }
});