import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

// describe('evenNumbers(numbers)', () => {

//   it('returns only even numbers', () => {
//     const input = [1, 2, 3, 4, 5, 6];
//     const output = evenNumbers(input);
//     expect(output).toEqual([2, 4, 6]);
//   });
// });

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, -10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, -10, 0]);
  });
});

describe('evenNumbers', () => {
  it('Do not return falsey values except 0', () => {
    const numbers = [null, 4, 5, 10.2, 0, undefined, NaN, false, 'four'];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 0]);
  });
});

describe('toDollars', () => {
  it('Returns a number formatted in dollars and cents', () => {
    const number = 99;
    const result = toDollars(number);
    expect(result).toEqual('$99.00');
  });
});

describe('toDollars', () => {
  it('Returns a number formatted in dollars and cents, with cents rounded to two decimals.', () => {
    const number = 99.75412;
    const result = toDollars(number);
    expect(result).toEqual('$99.75');
  });
});

describe('toDollars', () => {
  it('Negative amounts should have the "-" before the "$".', () => {
    const number = -99.75412;
    const result = toDollars(number);
    expect(result).toEqual('-$99.75');
  });
});

describe('toDollars', () => {
  it('Returns a number formatted in dollars and cents', () => {
    const number = 0;
    const result = toDollars(number);
    expect(result).toEqual('$0.00');
  });
});

describe('divideBy', () => {
  it('Returns a new array of numbers where every entry has been divided by the given divisor. Does not modify the original array.', () => {
    const numbers = [0, 6, 33, 66, 99];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([0, 2, 11, 22, 33]);
    expect(numbers).toEqual([0, 6, 33, 66, 99]);
  });
});

describe('divideBy', () => {
  it('Returns a new array of numbers where every entry has been divided by the given divisor. Does not include falsey values other than 0. Does not modify the original array.', () => {
    const numbers = [0, 6, 33, 66, 99, NaN, null, undefined, false, 'six'];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([0, 2, 11, 22, 33]);
    expect(numbers).toEqual([0, 6, 33, 66, 99, NaN, null, undefined, false, 'six']);
  });
});

describe('dividedBy', () => {
  it('Returns a new array of decimal numbers when odd numbers are divided by even numbers. Does not modify the original array.', () => {
    const numbers = [5, 15, 20, 25];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([2.5, 7.5, 10, 12.5]);
    expect(numbers).toEqual([5, 15, 20, 25]);
  });
});

describe('multiplyBy', () => {
  it('Modifies an object by multiplying the value of each key, but only if that value is a number.Key names are arbitrary.', () => {
    const obj = { first: 3, second: 6, a: 'a' };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ first: 6, second: 12, a: 'a' });
  });
});

describe('multiplyBy', () => {
  it('Modifies an object by multiplying the value of each key, but only if that value is a number.Key names are arbitrary.', () => {
    const obj = { first: null, second: undefined, a: 'a', b: NaN };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ first: null, second: undefined, a: 'a', b: NaN });
  });
});
