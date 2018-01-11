class Point {

  constructor(private x?: number, private y?: number) {
  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  getX() {
    return this.x;
  }
}

let point = new Point(1);
point.draw();





