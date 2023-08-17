const romanToInt = (s: string): number => {
  const romanValues: Record<string, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const currentRomanValue = romanValues[s[i]];
    const nextRomanValue = romanValues[s[i + 1]];

    if (nextRomanValue && currentRomanValue < nextRomanValue) {
      result += nextRomanValue - currentRomanValue;
      i++;
    } else {
      result += currentRomanValue;
    }
  }

  return result;
}