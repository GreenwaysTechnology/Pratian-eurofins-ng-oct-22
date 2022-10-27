//what if the all fields must have been intalized
/**
 *  "strictNullChecks": true,
        "strictPropertyInitialization": true,
 */
class Point {
    //Fields : instance variables
    x: number = 0
    y: number = 0
    //z?: number //what if i dont want default value
    z!:number //what if i dont want default value
}

let point = new Point()
console.log(`X = ${point.x} Y = ${point.y} Z=${point.z}`)