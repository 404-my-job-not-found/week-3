const validPath = (n, edges, source, destination) => {
  const graph = Array.from({ length: n }, () => []);
  const visited = Array(n).fill(false);

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  let curr = source;
  visited[curr] = true;
  const queue = [curr];

  while (queue.length > 0) {
    curr = queue.shift();

    if (curr === destination) return true;

    for (const neighbor of graph[curr]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }

  return false;
};

console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);
console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);
console.log(validPath(5, [[0, 4]], 0, 4));
console.log(validPath(1, [], 0, 0));
