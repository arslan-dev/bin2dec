export function bin2decSimple(n: string) {
  return parseInt(n, 2)
}

export function bin2decCustom(n: string) {
  const digitArr = n.split('')
  const digitAmount = digitArr.length
  return n.split('').reduceRight((prev, cur, index) => {
    if (cur === '1') {
      prev += Math.pow(2, (digitAmount-index-1))
    }
    return prev
  }, 0)
}