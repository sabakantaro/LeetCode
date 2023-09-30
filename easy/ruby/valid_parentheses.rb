# @param {string} s
# @return {Boolean}
def is_valid(s)
  stack = []
  bracket_pairs = { '(' => ')', '{' => '}', '[' => ']' }

  s.each_char do |char|
    if bracket_pairs.key?(char)
      stack.push(char)
    elsif bracket_pairs.value?(char)
      return false if stack.empty? || bracket_pairs[stack.pop] != char
    end
  end

  stack.empty?
end
