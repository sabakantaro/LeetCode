# @param {Integer} n
# @return {Integer}
def climb_stairs(n, memo = {})
  return n if n <= 3
  return memo[n] if memo[n]

  memo[n] = climb_stairs(n - 1, memo) + climb_stairs(n - 2, memo)
  memo[n]
end
