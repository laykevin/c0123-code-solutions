/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width * width, width * 4);
    this.width = width;
  }

  print() {
    return `width: ${this.width}, ${super.print()}`;
  }
}

const square = new Square(1);
console.log(square.print());
