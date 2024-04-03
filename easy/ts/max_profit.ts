function maxProfit(prices: number[]): number {
  let maxProfit: number = 0;
  let buyDay: number = prices[0];
  for (let price of prices) {
    if (price < buyDay) {
      buyDay = price;
    }
    const profit = price - buyDay;
    if (maxProfit < profit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};