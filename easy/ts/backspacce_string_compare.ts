function backspaceCompare(s: string, t: string): boolean {
  function processedString(s: string): string {
    let stack: string[] = [];
    for (let char of s) {
      if (char !== '#') {
        stack.push(char);
      } else if (stack.length) {
        stack.pop();
      }
    }
    return stack.join('');
  }

  return processedString(s) === processedString(t);
};

// better solution Time Complexity: O(n) Space Complexity: O(1)

function backspaceCompare_(S: string, T: string): boolean {
  function getNextValidCharIndex(s: string, index: number): number {
    let backspaceCount = 0;
    while (index >= 0) {
      if (s[index] === '#') {
        backspaceCount++;
      } else if (backspaceCount > 0) {
        backspaceCount--;
      } else {
        break;
      }
      index--;
    }
    return index;
  }

  let i = S.length - 1;
  let j = T.length - 1;

  while (i >= 0 || j >= 0) {
    i = getNextValidCharIndex(S, i);
    j = getNextValidCharIndex(T, j);

    if (i >= 0 && j >= 0 && S[i] !== T[j]) return false;

    if ((i >= 0) !== (j >= 0)) return false;

    i--;
    j--;
  }

  return true;
}