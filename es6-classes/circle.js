/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius ** 2, 2 * Math.PI * radius);
    this.radius = radius;
  }

  print() {
    return `radius: ${this.radius}, ${super.print()}`;
  }
}

const circle = new Circle(1);
console.log(circle.print());
