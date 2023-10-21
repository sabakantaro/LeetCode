# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  return '' if strs.empty?

  prefix = strs[0]
  strs.each do |str|
    prefix = prefix.chop until str.start_with?(prefix)
  end

  prefix
end
