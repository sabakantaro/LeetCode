function maxSubArray(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= 0) {
      nums[i] += nums[i - 1];
    }
  }

  return nums.sort((a, b) => b - a)[0];
};