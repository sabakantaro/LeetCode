from typing import Dict


class Solution:
    def longestPalindrome(self, s: str) -> int:
        char_count: Dict[str, int] = {}

        for char in s:
            if char in char_count:
                char_count[char] += 1
            else:
                char_count[char] = 1

        len = 0
        has_odd = False
        for count in char_count.values():
            if count % 2 == 0:
                len += count
            else:
                len += count - 1
                has_odd = True

        if has_odd:
            len += 1
        return len
