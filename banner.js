let colors = ["#005f99", 
  "#d72631",
  "#fff200"];
let grid = 6;
let boxes = [];

function setup() {
  createCanvas(600, 600);

  background("#ffffff");
  noStroke();

  for (let y = height / grid / 2; y < height; y += height / grid) {
    for (let x = 0; x < width; x += width / grid) {
      let c = colors[(x / (width / grid) + floor(y / (height / grid))) % 3];
      boxes.push(new Box(x, y, c));
    }
  }
}

function draw() {
  boxes.forEach((box) => {
    box.show();
    box.move();
    if (random(1) < 0.01) box.speed = 1;
  });
}

class Box {
  constructor(x, y, color) {
    this.start = x;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.size = height / grid / 2;
    this.color = color;
  }

  show() {
    fill("#0d0e08");
    square(this.x - 1, this.y + 1, this.size);
    fill(this.color);
    square(this.x, this.y, this.size);
  }

  move() {
    if (this.x < this.start + this.size) {
      this.x += this.speed;
      this.y -= this.speed;
    }
  }
}