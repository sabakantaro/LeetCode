/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"


Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/

var addBinary = function (a, b) {
  let zeros = "";
  for (let i = 0; i < Math.abs(a.length - b.length); i++) {
    zeros += "0";
  }
  if (a.length < b.length) {
    a = zeros + a;
  } else {
    b = zeros + b;
  }

  let sum = "";
  let carry = "";
  for (let j = a.length - 1; 0 <= j; j--) {
    if (a[j] === "0" && b[j] === "0") {
      if (carry === "1") {
        sum = "1" + sum;
        carry = "";
      } else {
        sum = "0" + sum;
      }
    } else if (
      (a[j] === "1" && b[j] === "0") ||
      (a[j] === "0" && b[j] === "1")
    ) {
      if (carry === "1") {
        sum = "0" + sum;
        carry = "1";
      } else {
        sum = "1" + sum;
      }
    } else if (a[j] === "1" && b[j] === "1") {
      if (carry === "1") {
        sum = "1" + sum;
      } else {
        sum = "0" + sum;
        carry = "1";
      }
    }
    console.log(carry, sum);
  }
  return carry === "1" ? carry + sum : sum;
};
