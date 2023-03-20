document.querySelector("h1").onmouseover = event => {
    event.target.innerText = Math.random() * 24;
}