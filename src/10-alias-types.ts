(() => {
  type UserID = string | number | boolean
  let userId: UserID

  // Literal types
  type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL'
  let size: Sizes = 'XS'

  function greeting(myText: UserID, size: Sizes) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`)
    } else  if (typeof myText === 'number') {
      console.log(`number ${myText.toFixed(1)}`)
    } else {
      console.log(`boolean ${myText}`)
    }
    console.log(`size ${size}`)
  }

  greeting(111, 'M')
  greeting('Jair Aviles', 'XL')
})();
