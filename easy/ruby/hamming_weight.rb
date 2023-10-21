# @param {Integer} n, a positive integer
# @return {Integer}
def hamming_weight(n)
  res = 0
  while n != 0
    n &= n - 1
    res += 1
  end

  res
end
