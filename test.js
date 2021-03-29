var element = src="Capture.PNG";


document.getElementById("test").innerHTML = "Bananas are good";

document.getElementById("image").src = "default-syndicate.png";

var flipped = false;
function flipCard() {

if (flipped) {
    document.getElementById("image").src = "Capture.PNG";
}
else {
    document.getElementById("image").src = "default-syndicate.png";
}
flipped = !flipped;
}


document.getElementById("vid").src = "vid.mp4";

function playIt(isHovering, element) {
    if (isHovering == true) {
    element.play();
}
    else if (isHovering == false) {
    element.pause();
}
}