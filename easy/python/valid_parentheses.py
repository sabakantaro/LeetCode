class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for x in s:
            if x == "{":
                stack.append("}")
            elif x == "[":
                stack.append("]")
            elif x == "(":
                stack.append(")")
            elif stack and x == stack.pop():
                continue
            else:
                return False

        return len(stack) == 0
