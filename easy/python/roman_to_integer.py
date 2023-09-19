from ast import Dict


class Solution:
    def romanToInt(self, s: str) -> int:
        roman: Dict[str, int] = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
        res = 0
        prev = 0

        for char in s:
            curr = roman[char]

            if prev < curr:
                res += curr - prev * 2
            else:
                res += curr

            prev = curr

        return res


# Time complexity: O(n)
# Space complexity: O(1)
