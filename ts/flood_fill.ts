function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const origin: number = image[sr][sc]

  function fill(image: number[][], sr: number, sc: number): number[][] {
    if (sr < 0 || image.length <= sr || sc < 0 || image[0].length <= sc) return image
    if (image[sr][sc] !== origin) return image
    if (image[sr][sc] === color) return image

    image[sr][sc] = color

    fill(image, sr - 1, sc)
    fill(image, sr, sc - 1)
    fill(image, sr + 1, sc)
    fill(image, sr, sc + 1)

    return image
  }

  fill(image, sr, sc)

  return image
};