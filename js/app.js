// When btn clicked the corrosponding audio file will play
// Add a border the button the user has pressed
function play(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}`);
    const keyPress = document.querySelector(`.key[data-key="${e.keyCode}`);
    if (audio == null) return;
    audio.currentTime = 0;
    audio.play();
    keyPress.classList.add("playing");
}
window.addEventListener("keydown", play);

let allBtn = document.querySelectorAll(".key");
allBtn = [...allBtn];

// Remove the border after a little time of press
function removeBorder(e) {
    if (e.propertyName != "transform") {
        return;
    } else {
        e.target.classList.remove("playing");
    }
}
allBtn.forEach((btn) => btn.addEventListener("transitionend", removeBorder));
