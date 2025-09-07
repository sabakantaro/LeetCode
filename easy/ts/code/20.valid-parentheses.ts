function isValid(s: string): boolean {
  const stack: string[] = []
  const mapping: { [key: string]: string } = {
      "(": ")",
      "{": "}",
      "[": "]"
  }
  for (const bracket of s) {
      console.log(mapping[bracket])
      if (mapping[bracket] !== undefined) {
          stack.push(mapping[bracket])
      } else {
          if (stack.length === 0) return false
          const closeBracket = stack.pop()
          if (closeBracket === bracket) {
              continue
          } else {
              return false
          }
      }
  }
  return stack.length === 0
};

export { isValid };

