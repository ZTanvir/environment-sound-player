window.addEventListener("keydown", function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}`);
    const keyPress = document.querySelector(`.key[data-key="${e.keyCode}`);
    console.log(keyPress);
    if (audio == null) return;
    audio.currentTime = 0;
    audio.play();
    keyPress.classList.add("playing");
});
