class Point {
    x: number
    y: number
    z: number
    //constructors
    constructor(x: number = 0, y: number = 0, z: number = 0) {
        this.x = x
        this.y = y
        this.z = z
    }

}

let point = new Point(10, 10, 10)
console.log(`X = ${point.x} Y = ${point.y} Z=${point.z}`)

point = new Point()
console.log(`X = ${point.x} Y = ${point.y} Z=${point.z}`)