(() => {
  let productTitle = 'My amazing product'
  // productTitle = null
  // productTitle = () => {}
  productTitle = 'Updated product title'
  console.log('productTitle', productTitle)

  const productDescription = 'This product is one of the best thing ever invented'
  console.log('productDescription', productDescription)

  const  productPrice = 100
  const isNew = false

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `

  console.log('summary', summary)
})()
