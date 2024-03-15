const ele1 = document.getElementById("ele1");
const ele2 = document.getElementById("ele2");
const ele3 = document.getElementById("ele3");
const keyDiv = document.getElementById("key");

const colors = {
  a: "pink",
  s: "orange",
  d: "cyan",
  q: "purple",
  w: "gray",
  e: "brown"
};

const defaultColor = "green";

ele1.addEventListener("click", function() {
  pintar(defaultColor);
});

ele2.addEventListener("click", function() {
  pintar("red");
});

ele3.addEventListener("click", function() {
  pintar("blue");
});

document.addEventListener('keydown', function(event) {
  if (event.key in colors) {
    keyDiv.style.backgroundColor = colors[event.key];
  } else if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = colors[event.key];
    newDiv.style.border = '1px solid black';
    document.body.appendChild(newDiv);
  }
});

function pintar(color) {
  ele1.style.backgroundColor = color;
  ele2.style.backgroundColor = color;
  ele3.style.backgroundColor = color;
}