class Ball {
  constructor(radius, initialX, initialY, vx, vy, color) {
    this.radius = radius;
    this.x = initialX;
    this.y = initialY;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
  }
  draw(ctx) {
    ctx.save(); // save and restore to don't change the state of ctx

    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.restore();
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.right() > CANVAS_WIDTH || this.left() < 0) {
      this.vx *= -1
    }
    if (this.bottom() > CANVAS_HEIGHT) {
      this.vy = -10 // => to give a bouncing force that is always the same
      // this.vy = -Math.abs(this.vy) // => to have a simple bounce 
    }
    if (this.top() < 0) {
      this.vy = Math.abs(this.vy)
    }

    let gravity = 0.1
    this.vy += gravity
  }
  top() { return this.y - this.radius }
  bottom() { return this.y + this.radius }
  left() { return this.x - this.radius }
  right() { return this.x + this.radius }
}

/*
Σ forces = m * a
       g = a      => vector gravity = vector acceleration 
*/
