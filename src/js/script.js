var click = 0;

function increment(e) {
  var x = e.clientX - 240;
  var y = e.clientY - 160;
  var distance = Math.sqrt(y*y + x*x);
  if (distance < 50) {
    click++;
    redraw();
  }
}

var canvasClick = document.getElementById("canvas");
canvasClick.addEventListener("click", increment);
var ctx = canvasClick.getContext("2d");

function redraw() {
  ctx.clearRect(0, 0, canvasClick.width, canvasClick.height)
  ctx.font = "20px Verdana";
  ctx.fillText("Клики: " + click,190,20);
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(canvasClick.width/2, canvasClick.height/2, 50,0,2*3.14);
  ctx.fill();
}

redraw();
