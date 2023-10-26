# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
  return false if (x != 0 && x % 10 == 0) || x < 0

  reverse = 0
  while x > reverse
    reverse = reverse * 10 + x % 10
    x = (x / 10).floor
  end

  p [x, reverse]
  x == reverse || x == (reverse / 10).floor
end
