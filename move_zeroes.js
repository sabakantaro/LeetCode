/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.



Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]


Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1


Follow up: Could you minimize the total number of operations done

*/

// var moveZeroes = function (nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != 0) {
//       nums[count++] = nums[i];
//     }
//   }
//   while (count < nums.length) {
//     nums[count++] = 0;
//   }
//   return nums;
// }

// var moveZeroes = function (nums) {
//   let left = 0;
//   let right = left + 1;

//   while (right < nums.length) {
//     if (nums[left] !== 0) {
//       left++;
//       right++;
//     } else {
//       if (nums[right] !== 0) {
//         [nums[left], nums[right]] = [nums[right], nums[left]];
//         left++;
//       }
//       right++;
//     }
//   }
//   return nums;
// };

let moveZeroes = function (nums) {
  if (nums.length === 1) return nums;

  let left = 0;
  let right = left + 0;

  while (nums.length > right) {
    if (nums[left] === 0 && nums[right] === 0) {
      right++;
    } else if (nums[left] === 0) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++;
      right++;
    } else {
      left++;
      right++;
    }
  }
  return nums;
};
