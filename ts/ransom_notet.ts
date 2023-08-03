function canConstruct(ransomNote: string, magazine: string): boolean {
  const hash = {};
  let count = 0;

  for (const char of ransomNote) {
    hash[char] = (hash[char] || 0) + 1
    count++
  }

  for (const char of magazine) {
    if (hash[char] && 0 < hash[char]) {
      hash[char]--
      count--
    }
  }

  return count === 0
};