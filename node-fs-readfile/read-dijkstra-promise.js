import * as fsPromises from 'node:fs/promises';

const promise = fsPromises.readFile('dijkstra.txt', 'utf8');
promise
  .then((message) => console.log(message))
  .catch((error) => console.error(error.message));
