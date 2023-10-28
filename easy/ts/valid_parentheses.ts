function isValid(s: string): boolean {
  const stack: string[] = [];
  const mapping: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (mapping[char]) {
      stack.push(mapping[char]);
    } else if (stack.pop() === char) {
      continue;
    } else {
      return false;
    }
  }

  return stack.length == 0
}