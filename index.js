const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let current = 1;

prev.addEventListener("click", () => {
    if (current > 1) {
        current--;
        // console.log("current: " + current);
    }
    updateStyles();
});

next.addEventListener("click", () => {
    if (current < circles.length) {
        current++;
        // console.log("current: " + current);
    }
    updateStyles();
});

function updateStyles() {
    circles.forEach((circle, index) => {
        if (index < current) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    const count = document.querySelectorAll(".active");
    progress.style.width =
        ((count.length - 1) / (circles.length - 1)) * 100 + "%";

    if (current === 1) {
        prev.disabled = true;
    } else if (current === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
