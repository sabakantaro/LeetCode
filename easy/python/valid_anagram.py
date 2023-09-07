class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        hash = {}
        for char in s:
            if hash.get(char) is None:
                hash[char] = 1
            else:
                hash[char] += 1

        for char in t:
            if hash.get(char) and hash[char] >= 1:
                hash[char] -= 1
            else:
                return False

        return True
