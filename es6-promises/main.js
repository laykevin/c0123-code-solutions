import takeAChance from './take-a-chance.js';
const chanceResult = takeAChance('Kevin');
// chanceResult.then(
//   (value) => {
//     console.log(value);
//   },
//   (reason) => {
//     console.error(reason.message);
//   }
// );

chanceResult
  .then((message) => console.log(message))
  .catch((error) => console.error(error.message));
