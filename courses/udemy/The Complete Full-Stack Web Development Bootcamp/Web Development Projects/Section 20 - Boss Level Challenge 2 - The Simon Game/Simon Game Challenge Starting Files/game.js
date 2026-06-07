function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);

    audio.play();
}

$(".btn").click(function(event) {
    $(this)
        .animate({ opacity: 0.2 }, 100)
        .animate({ opacity: 1 }, 100, () => {
            playSound(this.id);
    });
});
