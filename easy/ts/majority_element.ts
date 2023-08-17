function majorityElement(nums: number[]): number {
  let major = 0;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      major = num;
    };
    count += (major === num) ? 1 : -1
  }

  return major;
};