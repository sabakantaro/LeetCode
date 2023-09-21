from ast import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""

        prefix = strs[0]
        for i in range(1, len(strs)):
            temp = ""
            for j in range(min(len(prefix), len(strs[i]))):
                if prefix[j] == strs[i][j]:
                    temp += prefix[j]
                else:
                    break
            prefix = temp
        return prefix
