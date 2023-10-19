# @param {String} s
# @param {String} t
# @return {Boolean}
def backspace_compare(s, t)
  helper = lambda do |str|
    stack = []
    str.each_char do |char|
      if char == '#'
        stack.pop
      else
        stack.push(char)
      end
    end
    stack
  end

  helper.call(s) == helper.call(t)
end
