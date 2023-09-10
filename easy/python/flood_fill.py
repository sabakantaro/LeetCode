from ast import List


class Solution:
    def floodFill(
        self, image: List[List[int]], sr: int, sc: int, color: int
    ) -> List[List[int]]:
        origin = image[sr][sc]

        def fill(image: List[List[int]], sr: int, sc: int):
            if sr < 0 or len(image) <= sr or sc < 0 or len(image[0]) <= sc:
                return image

            if image[sr][sc] != origin or image[sr][sc] == color:
                return image

            image[sr][sc] = color

            fill(image, sr + 1, sc)
            fill(image, sr - 1, sc)
            fill(image, sr, sc + 1)
            fill(image, sr, sc - 1)

            return image

        fill(image, sr, sc)

        return image
