import * as fsPromises from 'node:fs/promises';

const args = process.argv.slice(2);
const promises = args.map((filename) => fsPromises.readFile(filename, 'utf8'));
Promise.all(promises)
  .then((values) => console.log(values.join('\n')))
  .catch((err) => console.error(err));
