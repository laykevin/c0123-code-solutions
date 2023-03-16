const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log('Value of sum:', sum);

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log('Value of product:', product);

const balance = account.reduce((accumulator, currentValue) => {
  if (currentValue.type === 'deposit') {
    accumulator += currentValue.amount;
  } else {
    accumulator -= currentValue.amount;
  }
  return accumulator;
}, 0);
console.log('Value of balance:', balance);

const composite = traits.reduce((accumulator, currentValue) => {
  accumulator[Object.keys(currentValue)[0]] = Object.values(currentValue)[0];
  return accumulator;
});
console.log('Value of composite:', composite);
