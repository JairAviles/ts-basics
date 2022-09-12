(() => {
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = []

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({
    title: 'Raiders fan typed',
    createdAt: new Date(),
    stock: 54,
    size: 'L'
  })

  addProduct({
    title: 'Jordan stamp typed',
    createdAt: new Date(),
    stock: 87
  })

  console.log({products})
})()
