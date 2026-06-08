const gamePattern = [];
const userClickedPattern = [];

function nextSequence(id) {
    const userChosenColour = id;
    const randomNumber = Math.floor(Math.random() * 4);
    const buttonColours = ["red", "blue", "green", "yellow"];
    const buttonChosen = buttonColours[randomNumber];
    
    gamePattern.push(buttonChosen);
    userClickedPattern.push(userChosenColour);

    console.log(gamePattern);
    console.log(userClickedPattern);
}

function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);

    audio.play();
}

$(".btn").click(function(event) {
    $(this)
        .animate({ opacity: 0.2 }, 100)
        .animate({ opacity: 1 }, 100, () => {
            playSound(this.id);
            nextSequence(this.id);
    });
});
