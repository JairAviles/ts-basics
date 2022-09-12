(() => {

  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'

  const products: any[] = []

  const login = (data: {email: string, password: string}) => {
    console.log(data.email, data.password)
  }

  // login('mi@email.com', 'password')
  login({email: 'mi@email.com', password: 'password'})

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
  }

  addProduct({
    title: 'Raiders fan',
    createdAt: new Date(),
    stock: 54,
    size: 'L'
  })

  addProduct({
    title: 'Jordan stamp',
    createdAt: new Date(),
    stock: 87
  })

  console.log({products})

})()
