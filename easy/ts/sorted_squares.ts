function sortedSquares(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    nums[i] **= 2
  }

  return nums.sort((a, b) => a - b)
};