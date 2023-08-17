class Solution:
  def backspaceCompare(self, s: str, t: str) -> bool:
    def processed_string(s: str) -> str:
      stack = []
      for char in s:
        if char != "#":
          stack.append(char)
        elif stack:
          stack.pop()
      return "".join(stack)

    return processed_string(s) == processed_string(t)
