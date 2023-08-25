function updateMatrix(mat: number[][]): number[][] {
  const m = mat.length;
  const n = mat[0].length;
  const que: [number, number][] = [];
  const ans: number[][] = Array.from({ length: m }, () => Array(n).fill(0))
  const directions: [number, number][] = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const visited = new Set();

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        que.push([i, j]);
        visited.add({ m: i, n: j });
      }
    }
  }

  let dist = 0;

  while (que.length) {
    for (let k = 0, len = que.length; k < len; k++) {
      const [i, j] = que.shift() as [number, number];
      if (mat[i][j] === 1) {
        ans[i][j] = dist;
      }
      for (const d of directions) {
        const ni = i + d[0];
        const nj = j + d[1];
        if (0 <= ni && ni < m && 0 <= nj && nj < n && !visited.has({ m: ni, n: nj })) {
          que.push([ni, nj]);
          visited.add({ m: ni, n: nj });
        }
      }
    }

    dist++
  }

  return ans
}

