function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

Shape.prototype.calcPerimeter = function ()  {
    return this.sides * this.sideLength;
}

let square = new Shape('vuong', 2, 2);
console.log(square.calcPerimeter());

Object.prototype