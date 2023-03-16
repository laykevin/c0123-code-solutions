import { writeFile } from 'node:fs/promises';

const data = Math.random();
const promise = writeFile('random.txt', `${data}\n`);
promise
  .then((value) => value)
  .catch((err) => console.error(err));
