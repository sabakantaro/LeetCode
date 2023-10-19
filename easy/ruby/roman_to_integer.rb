# @param {String} s
# @return {Integer}
def roman_to_int(s)
  roman = {
    'I' => 1,
    'V' => 5,
    'X' => 10,
    'L' => 50,
    'C' => 100,
    'D' => 500,
    'M' => 1000
  }

  res = 0
  prev = 0

  s.each_char do |char|
    curr = roman[char]

    res += if prev < curr
             curr - prev * 2
           else
             curr
           end

    prev = curr
  end

  res
end
