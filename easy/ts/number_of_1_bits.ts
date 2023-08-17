// function hammingWeight(n: number): number {
//     let count = 0;
//     while (n !== 0) {
//         count++
//         n = n & (n - 1)
//     }

//     return count;
// };

function hammingWeight(n: number, count: number = 0): number {
  if (n === 0) return count
  count++

  return hammingWeight(n & (n - 1), count);
};