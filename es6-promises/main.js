import takeAChance from './take-a-chance.js';
const chanceResult = takeAChance('Kevin');
chanceResult.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.error(reason.message);
  }
);
