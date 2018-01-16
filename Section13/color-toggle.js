var btn = document.querySelector("#toggle");
var body = document.querySelector("body");

function toggle() {
    body.classList.toggle("bg");
}

btn.addEventListener("click", toggle);