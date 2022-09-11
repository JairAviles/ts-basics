(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })
    return total.toString();
  }

  const printTotal = (prices: number[]): void => {
    const rta =  calcTotal(prices)
    console.log(`Total is: ${rta}`)
  }

  printTotal([1, 2, 2, 1])

})();
