/* 
   2 - 0
  / \
 1 - 3
*/

// Edge List. Se  muestra por pares conectados
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// Adjacent List. Conecta con el indice del array principal.
// Array/Indice 0      1        2        3
const graph = [[2], [2, 3], [0, 1, 3], [1, 2]];
// objeto
const graph = {
  0: [2],
  1: [2, 3],
  2: [0, 1, 3],
  3: [1, 2],
};

// Adjacent Matrix
// array
const graph = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
];
// objeto
const graph = {
  0: [0, 0, 1, 0],
  1: [0, 0, 1, 1],
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
