import { createProduct, calcStock, products } from './product.service'

createProduct({
  name: 'Raiders fan typed',
  createdAt: new Date(),
  stock: 54,
  size: 'L'
})

createProduct({
  name: 'Jordan stamp typed',
  createdAt: new Date(),
  stock: 87
})

console.log(`Total stock: ${calcStock()}`)

console.log(products)
