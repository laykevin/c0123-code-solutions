import { writeFile } from 'node:fs';

const data = Math.random();
writeFile('random.txt', `${data}\n`, (err) => {
  if (err) throw err;
});
