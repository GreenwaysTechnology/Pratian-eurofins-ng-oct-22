//object types/reference types
//class as type, interface as type,type keyword

// class Product {
//     //required fields
//     id!: number
//     name!: string
//     //optional fields
//     qty?: number
//     price?: number
//     inStock?: 'Available' | 'NotAvailable'
// }

// interface Product {
//     //required fields
//     id: number
//     name: string
//     //optional field
//     qty?: number
//     price?: number
//     inStock?: "Available" | "NotAvailable"
// }
type Product = {
    //required fields
    id: number
    name: string
    //optional field
    qty?: number
    price?: number
    inStock?: "Available" | "NotAvailable"
}
let product: Product = {
    id: 1,
    name: 'Phone',
    qty: 100,
    price: 100,
    inStock: 'Available'
}

let newproduct: Product = {
    id: 1,
    name: 'Phone',
    qty: 100,
}