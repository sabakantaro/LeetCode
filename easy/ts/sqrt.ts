function mySqrt(x: number): number {
  let start = 0
  let end = x

  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    const midSquared = mid * mid

    if (midSquared === x) {
      return mid
    } else if (midSquared < x) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return end
};