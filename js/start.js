const startButton = document.querySelector(".startButton")
const clickSound = document.getElementById("click")

startButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        location.assign('game.html');
    }, 200);
})

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}