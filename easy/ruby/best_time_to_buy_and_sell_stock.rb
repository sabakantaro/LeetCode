# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
  buy_price = prices[0]
  max_profit = 0
  prices.each do |price|
    profit = price - buy_price
    if max_profit < profit
      max_profit = profit
    elsif price < buy_price
      buy_price = price
    end
  end

  max_profit
end
