//interfaces;
interface Runnable {
    run(): void
}
interface Eatable {
    eat(): void
}
class Animal implements Runnable, Eatable {
    run(): void {
        console.log('Animal runs!')
    }
    eat(): void {
        console.log('Animal eats')
    }
}
let animal = new Animal()
animal.eat()
animal.run()
