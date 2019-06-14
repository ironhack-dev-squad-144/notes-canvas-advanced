let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let angle = 0;
let angle2 = 0;
let scaleRatio = 1;

function drawReferential() {
  ctx.save();

  ctx.fillStyle = "red";
  ctx.strokeStyle = "red";
  ctx.lineWidth = 5;

  // Circle
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, 2 * Math.PI);
  ctx.fill();

  // Line for x
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(100, 0);
  ctx.stroke();

  // Line for y
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 100);
  ctx.stroke();

  ctx.restore();
}

function drawRotatedSquare() {
  ctx.save();
  ctx.fillStyle = "blue";

  ctx.translate(150, 150);
  ctx.rotate(angle);
  ctx.fillRect(-50, -50, 100, 100);
  // drawReferential();

  ctx.restore();
}

function drawRotatedSquare2() {
  ctx.save();
  ctx.fillStyle = "blue";

  ctx.translate(350, 150);
  ctx.rotate(angle2);
  ctx.scale(scaleRatio, scaleRatio);
  ctx.fillRect(-50, -50, 100, 100);
  // drawReferential();

  ctx.restore();
}

// To draw things on the canvas
// Don't change any variable (except ctx) in this function
function drawEverything() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  ctx.fillRect(100, 100, 100, 100);
  // drawReferential();
  ctx.fillRect(300, 100, 100, 100);
  drawRotatedSquare();
  drawRotatedSquare2();
}

// To change variables
// Don't use ctx
function updateEverything() {
  angle += 0.01;
  angle2 += 0.02;
  scaleRatio *= 1.005;
  if (scaleRatio > 2) scaleRatio = 2
}

function animation() {
  updateEverything();
  drawEverything();
  window.requestAnimationFrame(animation);
}
animation();
