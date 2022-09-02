(() => {
  const prices = [1, 2, 3, 4, 5, 'hello', true]
  // prices.push('xyz')
  // prices.push(true)
  // prices.push({})
  // prices.push('6')
  prices.push(6)
  console.log('prices', prices)

  const products = ['random', false]
  // products.push(123)
  console.log('products', products)

  const mixed: (number | string | boolean | object)[] = ['init', false]
  mixed.push(2016)
  mixed.push({}) // tmp
  mixed.push([]) // tmp

  const numbers = [1, 2, 3 , 6, 5, 4]
  const updatedNumbers = numbers.map(item => item * 2)

  console.log('numbers', numbers)
  console.log('updatedNumbers', updatedNumbers)
})()
