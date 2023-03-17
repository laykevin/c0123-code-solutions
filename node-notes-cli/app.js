import * as fs from 'node:fs';
import * as fsPromises from 'node:fs/promises';

const fileData = fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(fileData);
const action = process.argv[2];

switch (action) {
  case 'read':
    for (const key in data.notes) {
      console.log(`${key}: ${data.notes[key]}`);
    }
    break;
  case 'create':
    data.notes[data.nextId] = process.argv[3];
    data.nextId++;
    fsPromises.writeFile('data.json', JSON.stringify(data, null, 2));
    break;
  case 'update': {
    const id = process.argv[3];
    if (data.notes[id]) {
      data.notes[id] = process.argv[4];
      fsPromises.writeFile('data.json', JSON.stringify(data, null, 2));
    } else {
      console.log('Note not found');
    }
    break;
  }
  case 'delete': {
    const id = process.argv[3];
    if (data.notes[id]) {
      delete data.notes[id];
      fsPromises.writeFile('data.json', JSON.stringify(data, null, 2));
    } else {
      console.log('Note not found');
    }
    break;
  }
  default:
    console.log('Command not found');
}
