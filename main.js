"use strict";
// function log(message) {
//   console.log(message);
// }
// var message = 'Hello World';
// log(message);
exports.__esModule = true;
//----------
// function doSomething () {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log('Finally ' + i);
// }
// doSomething();
//----------
// // Varibale types (Type Annotation)
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, 'a', false];
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
// // enum defines a set of named constants (can have numeric or string-based enums)
// enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };
// let backgroundColor = Color.Red;
//-----------
// // Type Assertion (typeScript needs to know the type of a variable)
// // In this example the type of the variable messgae is not specified when declared.
// let message;
// message = 'abc';
// let endsWidthC = (<string>message).endsWidth('c');
// let endsWidthC = (message as string).endsWidth('c');
//-----------
// Interfaces - Defines an object
// interface Point {
//   x: number,
//   y: number,
// }
// let drawPoint = (point: Point) => {
// }
// let getDistance = (pointA: Point, pointB: Point) => {
// }
// drawPoint({
//   x: 1,
//   y: 2
// });
//-----------
// // Classes
// class Point {
//   x: number;
//   y: number;
//   constructor (x?: number, y?: number) {  // The "?" makes the parameter optional
//     this.x = x;
//     this.y = y;
//   }
//   draw () {
//     console.log('X: ' + this.x, 'Y: ' + this.y);
//   }
// }
// let point = new Point();
// point.x = 1;
// point.y = 2;
// point.draw();
//-----------
// // Access modifiers - public, private, and protected (public is the default)
// // Controls access to certain members of a class
// class Point {
//   private x: number;
//   private y: number;
//   constructor (x?: number, y?: number) {  // The "?" makes the parameter optional
//     this.x = x;
//     this.y = y;
//   }
//   draw () {
//     console.log('X: ' + this.x, 'Y: ' + this.y);
//   }
//   getX() {  // A method for access to x
//     return this.x;
//   }
//   setX(value) {
//     if (value < 0) throw new Error('value cannot be less than 0.');
//     this.x = value;
//   }
// }
// let point = new Point(1, 2);
// let x = point.getX();
// point.setX(10);
// point.draw();
//-----------
// // Prefixing a parameter with an access modifier in the constructor the field will be generated (this.x, this.y)
// class Point {
//   constructor (private _x?: number, private _y?: number) {  // The "?" makes the parameter optional
//   }
//   draw() {
//     console.log('X: ' + this._x, 'Y: ' + this._y);
//   }
//   get x() {  // A method for access to x (read-only)
//     return this._x;
//   }
//   set x(value) {
//     if (value < 0) throw new Error('value cannot be less than 0.');
//     this._x = value;
//   }
// }
// let point = new Point(1, 2);
// let x = point.x;  // Looks like a property, but it's really a method.
// point.x = 10;
// point.draw();
//-----------
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
point.draw();
