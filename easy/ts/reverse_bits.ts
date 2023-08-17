function reverseBits(n: number): number {
  let result = 0;
  let count = 0;
  while (count < 32) {
    result <<= 1;
    if (n & 1) result ^= 1;
    n >>= 1;
    count++;
  }

  return result >>>= 0;
};