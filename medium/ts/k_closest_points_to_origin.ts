function kClosest(points: number[][], k: number): number[][] {
  const minHeap: number[][] = [];
  for (const [x, y] of points) {
    const dist = (x ** 2) + (y ** 2);
    minHeap.push([dist, x, y]);
  }

  minHeap.sort((a, b) => a[0] - b[0]);

  const res: number[][] = [];
  while (k > 0) {
    const [dist, x, y] = minHeap.shift()!;
    res.push([x, y]);
    k--;
  }

  return res;
}
