(() => {
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'

  function productToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const productToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const tee = productToJson(
    'Air Max',
    new Date(),
    12,
    'XL'
  )

  const short = productToJsonV2(
    'Air Max',
    new Date(),
    12
  )


  console.log(tee)
  console.log(tee.title)
  console.log(tee.stock)
  console.log(tee.size)

  console.log(short)
  console.log(short.title)
  console.log(short.stock)
  console.log(short.size)

})();
