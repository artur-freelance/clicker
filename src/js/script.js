var click = 0;

function increment() {
  click++;
  redraw();
}

var canvasClick = document.getElementById("canvas");
var ctx = canvasClick.getContext("2d");

function redraw() {
  ctx.clearRect(0, 0, canvasClick.width, canvasClick.height)
  ctx.font = "20px Verdana";
  ctx.fillText("Клики: " + click,190,20);
}

redraw();
