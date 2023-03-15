import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';
switch (process.argv[3]) {
  case 'plus':
    console.log('result:', add(Number(process.argv[2]), Number(process.argv[4])));
    break;
  case 'minus':
    console.log('result:', subtract(Number(process.argv[2]), Number(process.argv[4])));
    break;
  case 'over':
    console.log('result:', divide(Number(process.argv[2]), Number(process.argv[4])));
    break;
  case 'times':
    console.log('result:', multiply(Number(process.argv[2]), Number(process.argv[4])));
    break;
  default: console.log('invalid operation');
}
