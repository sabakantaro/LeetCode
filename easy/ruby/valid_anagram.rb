# @param {String} s
# @param {String} t
# @return {Boolean}
def is_anagram(s, t)
  return false if s.length != t.length

  char_count = Hash.new(0)

  s.each_char { |char| char_count[char] += 1 }

  t.each_char do |char|
    return false unless char_count.key?(char) && char_count[char].positive?

    char_count[char] -= 1
  end

  true
end
