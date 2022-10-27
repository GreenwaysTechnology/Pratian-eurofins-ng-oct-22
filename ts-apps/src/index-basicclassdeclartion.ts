//class declaration is part of javascript (es 6 feature).

class Point {
    //Fields : instance variables
    x: number
    y: number
}

/**
 * let is variable declaration
 * point is reference variable
 * new is memory allocation operator
 * Point() is constructor call...
 */
let point = new Point()
//initalize the value
point.x =0
point.y =0
//point.x ="0" compile time error
console.log(`X = ${point.x} Y = ${point.y}`)