//dependency injection

class OrderService {
    constructor() {

    }
    public findAll(): string {
        return 'orders'
    }
}
// class OrderComponent {

//     //variable declared: has-a relationship
//     private orderService: OrderService

//     constructor(orderService: OrderService) {
//         this.orderService = orderService //dependency injection ; constructor injection
//     }
//     init(): void {
//         console.log(this.orderService.findAll())
//     }
// }

//code refactoring 
class OrderComponent {
    constructor(private orderService: OrderService) { }
    init(): void {
        console.log(this.orderService.findAll())
    }
}
//
let orderCmp = new OrderComponent(new OrderService())
orderCmp.init()
