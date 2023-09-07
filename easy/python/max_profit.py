from ast import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max = 0
        price = prices[0]
        for x in prices:
            if max < x - price:
                max = x - price
            elif x < price:
                price = x
            print(max)
        return max
