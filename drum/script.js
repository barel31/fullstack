let buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        makeSound(buttons[i].innerHTML);
        buttonAnimation(buttons[i].innerHTML);
    });
}

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            console.log(key);
    }
}

addEventListener("keydown", function (e) {
    if (
        e.key === "w" ||
        e.key === "a" ||
        e.key === "s" ||
        e.key === "d" ||
        e.key === "j" ||
        e.key === "k" ||
        e.key === "l"
    ) {
        makeSound(e.key);
        buttonAnimation(e.key);
    }
});

function buttonAnimation(key) {
    key = document.querySelector('.'+key);
    
    key.classList.add("pressed");
    setTimeout(function () {
        key.classList.remove("pressed");
    }, 100);
}
