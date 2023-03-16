import { writeFile } from 'node:fs/promises';

const data = `${process.argv[2]}\n`;
const promise = writeFile('note.txt', data);
promise
  .then((value) => value)
  .catch((err) => console.error(err));
