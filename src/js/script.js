var btn = document.getElementById("btn");
var text = document.getElementById("text");
var click = 0;

btn.addEventListener("click", increment);

function increment(e) {
  click++;
  text.innerHTML = click;
}