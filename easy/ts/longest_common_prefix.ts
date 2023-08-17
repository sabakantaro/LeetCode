const longestCommonPrefix = (strs) => {
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      const isEndOfString = i === strs[j].length;
      const isDifferentChar = strs[j][i] !== char;
      if (isEndOfString || isDifferentChar) {
        return strs[0].substring(0, i);
      }
    }
  }

  return strs[0];
}

longestCommonPrefix(["flower", "flow", "flight"]);
