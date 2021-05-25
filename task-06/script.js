const box = document.getElementById("box");
const browserWidth = document.documentElement.clientWidth;
const browserHeight = document.documentElement.clientHeight;

let y = 0;
let x = 0;

wrapper.addEventListener("mousemove", () => {
    var posX = event.clientX;
    var posY = event.clientY;

    x = (posX - (browserWidth / 2)) / 75;
    y = ((browserHeight / 2) - posY) / 75;

    box.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});