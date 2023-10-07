# @param {String} s
# @return {Integer}
def longest_palindrome(s)
  hash = Hash.new(0)
  s.each_char do |char|
    hash[char] += 1
  end

  p_length = 0
  has_odd = false
  hash.each do |count|
    if count[1].even?
      p_length += count[1]
    else
      p_length += count[1] - 1
      has_odd = true
    end
  end
  p_length += 1 if has_odd
  p_length
end
