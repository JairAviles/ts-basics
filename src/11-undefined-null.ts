(() => {
  let myNumber: number | null = null;
  let myString: string | undefined = undefined;
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  myNumber = 12
  myString = 'Not Undefined'

  function greet(name: string | null) {
    let hello = 'Hello '

    if (name) {
      hello += name
    } else {
      hello += 'stranger'
    }
    console.log(hello)
  }

  function optGreet(name: string | null) {
    let hello = 'Hello '
    hello += name?.toLowerCase() ?? 'nobody'
    console.log(hello)
  }

  greet('Jair')
  greet(null)
  optGreet('Jair')
  optGreet(null)
})();
