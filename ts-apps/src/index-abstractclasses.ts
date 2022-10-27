abstract class Animal {
    abstract hunt(): void
    saveAnimal() {
        console.log('Save Animal')
    }
}
class Tiger extends Animal {
    hunt(): void {
        console.log('Tiger hunts')
    }
}
let tiger = new Tiger()
tiger.hunt()
tiger.saveAnimal()