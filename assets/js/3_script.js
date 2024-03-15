const ele = document.getElementById("ele1");

function pintar(color = 'green') {
    ele.style.backgroundColor = color;
}

ele.style.backgroundColor = 'green';
ele.addEventListener("click", () => pintar('yellow'));