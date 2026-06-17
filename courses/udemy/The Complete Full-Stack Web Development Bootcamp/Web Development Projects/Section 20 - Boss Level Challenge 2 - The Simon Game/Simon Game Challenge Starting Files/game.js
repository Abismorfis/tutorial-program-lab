const buttonColour = ["red", "blue", "green", "yellow"];

const gamePattern = [];
const userClickedPattern = [];

let isKeyPressed = false;
let level = 0;

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColour [randomNumber];
    
    gamePattern.push(randomChosenColour);

    //playSound(randomChosenColour);

    const levelTitle = $('#level-title');

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
            nextSequence();
    });
});

$(document).keydown(function(event) {
    if (gamePattern.length === 0 && event.key === "a") {
        nextSequence();

        isKeyPressed = true;
    }
});