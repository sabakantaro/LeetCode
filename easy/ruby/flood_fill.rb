# @param {Integer[][]} image
# @param {Integer} sr
# @param {Integer} sc
# @param {Integer} color
# @return {Integer[][]}
def flood_fill(image, sr, sc, color)
  origin = image[sr][sc]
  fill = lambda do |r, c|
    return if r.negative? || image.length <= r ||
              c.negative? || image[0].length <= c

    return if image[r][c] != origin || image[r][c] == color

    image[r][c] = color

    fill.call(r, c + 1)
    fill.call(r, c - 1)
    fill.call(r + 1, c)
    fill.call(r - 1, c)
  end

  fill.call(sr, sc)
  image
end
