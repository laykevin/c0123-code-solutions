import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const a = Number(process.argv[2]);
const b = Number(process.argv[4]);
const operation = process.argv[3];
let answer;

switch (operation) {
  case 'plus':
    answer = add(a, b);
    break;
  case 'minus':
    answer = subtract(a, b);
    break;
  case 'over':
    answer = divide(a, b);
    break;
  case 'times':
    answer = multiply(a, b);
    break;
  default: answer = 'invalid operation';
}
console.log('result:', answer);
