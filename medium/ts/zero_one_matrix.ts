function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;

  // Initialize distance matrix and queue
  const distance: number[][] = Array.from({ length: m }, () => Array(n).fill(Infinity));
  const queue: [number, number][] = [];

  // Directions: up, down, left, right
  const directions: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  // Add positions of 0s to queue and set their distances to 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        distance[i][j] = 0;
      }
    }
  }

  // Breadth-first search
  while (queue.length > 0) {
    const [x, y] = queue.shift() as [number, number];
    // Iterate through all four directions
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      // Check boundaries and update distances if necessary
      if (newX >= 0 && newX < m && newY >= 0 && newY < n && distance[newX][newY] === Infinity) {
        distance[newX][newY] = distance[x][y] + 1;
        queue.push([newX, newY]);
      }
    }
  }

  return distance;
}
