// this type is tupple, not array of number
type RectArgs = [number, number];

class Rectangle {
  private x: number;
  private y: number;

  constructor([x, y]: RectArgs) {
    this.x = Math.abs(x);
    this.y = Math.abs(y);
  }

  get area(): number {
    return this.x * this.y;
  }
}

type CubeArgs = [number, number, number];

class Cube {
  private x: number;
  private y: number;
  private z: number;

  constructor([x, y, z]: CubeArgs) {
    this.x = Math.abs(x);
    this.y = Math.abs(y);
    this.z = Math.abs(z);
  }

  get volume(): number {
    return this.x * this.y * this.z;
  }
}

const rectArgs: RectArgs = [10, 20];
const rectangle = new Rectangle(rectArgs);

const pElementForRect = document.createElement('p');
pElementForRect.innerHTML = String(`Rectangle(${rectArgs}) area is ${rectangle.area}`);

document.body.appendChild(pElementForRect);

const cubeArgs: CubeArgs = [10, 20, 30];
const cube = new Cube(cubeArgs);

const pElementForCube = document.createElement('p');
pElementForCube.innerHTML = String(`Cube(${cubeArgs}) volume is ${cube.volume}`);

document.body.appendChild(pElementForCube);
