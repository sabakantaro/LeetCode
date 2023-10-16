# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
  max_len = [a.length, b.length].max
  a = a.rjust(max_len, '0')
  b = b.rjust(max_len, '0')

  res = ''
  carry = 0

  (max_len - 1).downto(0) do |i|
    sum = a[i].to_i + b[i].to_i + carry
    res = (sum % 2).to_s + res
    carry = sum / 2
  end

  carry.positive? ? carry.to_s + res : res
end
