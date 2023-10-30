function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let buyDay = prices[0];
  for (let i = 0; i < prices.length; i++) {
    const profit = prices[i] - buyDay
    if (maxProfit < profit) {
      maxProfit = profit;
    }
    if (prices[i] < buyDay) {
      buyDay = prices[i];
    }
  }

  return maxProfit
};