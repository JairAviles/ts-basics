(() => {
  let userId: string | number
  userId = 123
  userId = 'I\'m a string'

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`)
    } else {
      console.log(`number ${myText.toFixed(1)}`)
    }
  }
  greeting('HELLO')
  greeting(2022.65)
})();
