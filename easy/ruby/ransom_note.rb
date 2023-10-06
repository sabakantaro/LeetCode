# @param {String} ransom_note
# @param {String} magazine
# @return {Boolean}
def can_construct(ransom_note, magazine)
  hash = Hash.new(0)
  count = 0
  ransom_note.each_char do |char|
    hash[char] = (hash[char] || 0) + 1
    count += 1
  end

  magazine.each_char do |char|
    next unless hash[char].positive?

    hash[char] -= 1
    count -= 1
  end

  count.zero?
end
