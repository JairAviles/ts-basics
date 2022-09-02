(()=> {
  let productPrice = 100
  productPrice = 12
  console.log('productPrice', productPrice)

  let customerAge: number = 28
  customerAge = customerAge + 1
  console.log('customerAge', customerAge)

  let productInStock: number
  console.log('productInStock', productInStock)

  if (productInStock > 10) {
    console.log('product stock is > 10')
  }

  let discount = parseInt('150')
  console.log('discount', discount)

  if (discount <= 200) {
    console.log('apply discount')
  }

  let hex = 0xfff
  console.log('hex', hex)

  let binary = 0b1010
  console.log('binary', binary)

})();
