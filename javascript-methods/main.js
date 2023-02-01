var firstNum = 1;
var secondNum = 2;
var thirdNum = 3;
var maximumValue = Math.max(firstNum, secondNum, thirdNum);
console.log('Value of maximumValue:', maximumValue);
var heroes = ['Batman', 'Spiderman', 'Superman', 'Captain America'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);
var library = [
  {
    title: 'HTML & CSS',
    author: 'Jon Duckett'
  },
  {
    title: 'Javascript & JQuery',
    author: 'Jon Duckett'
  },
  {
    title: 'Book',
    author: 'Author'
  }
];
var lastBook = library.pop();
console.log('Value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('Value of firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library:', library);
var fullName = 'Kevin Lay';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName:', sayMyName);
