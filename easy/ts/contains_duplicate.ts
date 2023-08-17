function containsDuplicate(nums: number[]): boolean {
  const numHash = {};

  for (const num of nums) {
    if (numHash[num]) {
      return true;
    }
    numHash[num] = 1
  }

  return false;
}