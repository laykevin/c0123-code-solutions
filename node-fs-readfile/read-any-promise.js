import * as fsPromises from 'node:fs/promises';

const promise = fsPromises.readFile(process.argv[2], 'utf8');
promise
  .then((message) => console.log(message))
  .catch((error) => console.error(error.message));
