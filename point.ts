export class Point {
  constructor (private _x?: number, private _y?: number) {  // The "?" makes the parameter optional
    
  }

  draw() {
    console.log('X: ' + this._x, 'Y: ' + this._y);
  }
}