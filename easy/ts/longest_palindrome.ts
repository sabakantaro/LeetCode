function longestPalindrome(s: string): number {
  const hash = {};
  for (const char of s) {
    hash[char] = (hash[char] || 0) + 1;
  };

  let count = 0;
  let hasOdd = false;
  for (const char in hash) {
    if (hash[char] % 2 === 0) {
      count += hash[char];
    } else {
      count += hash[char] - 1;
      hasOdd = true;
    };
  };

  return hasOdd ? count + 1 : count;
};