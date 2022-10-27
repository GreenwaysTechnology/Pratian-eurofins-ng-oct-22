
class Point {
    //default scope is public
    public x = 10
    public y = 20

    public scale(n: number): void {
        this.x *= n
        this.y *= n
    }

}
let point = new Point()
console.log(`Before scaling ${point.x} ${point.y}`)
point.scale(2)
console.log(`After scaling ${point.x} ${point.y}`)

