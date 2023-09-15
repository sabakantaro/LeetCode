class Solution:
    def addBinary(self, a: str, b: str) -> str:
        maxLength = max(len(a), len(b))
        a = a.zfill(maxLength)
        b = b.zfill(maxLength)

        result = ""
        carry = 0

        for i in range(maxLength - 1, -1, -1):
            _sum = int(a[i]) + int(b[i]) + carry
            result = str(_sum % 2) + result
            carry = _sum // 2

        return str(carry) + result if carry else result
