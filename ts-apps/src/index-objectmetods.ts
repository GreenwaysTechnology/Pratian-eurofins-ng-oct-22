
class Point {
    //variables with type inference
    x = 10
    y = 20

    //methods
    scale(n: number): void {
        this.x *= n
        this.y *= n
    }

}
let point = new Point()
console.log(`Before scaling ${point.x} ${point.y}`)
point.scale(2)
console.log(`After scaling ${point.x} ${point.y}`)

