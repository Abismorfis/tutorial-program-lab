const gamePattern = [];
const userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);
}

function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);

    audio.play();
}

$(".btn").click(function() {
    const userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    $(this)
        .animate({ opacity: 0.2 }, 100)
        .animate({ opacity: 1 }, 100, () => {
            playSound(userChosenColour);
            //nextSequence();
    });
});
