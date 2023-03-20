const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    event.target.innerText = Math.floor(Math.random() * 24);
}