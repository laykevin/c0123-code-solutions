function convertMiniutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var minsToSecsResults = convertMiniutesToSeconds(5);
console.log('minsToSecsResults:', minsToSecsResults);
function greet(name) {
  var greetName = 'Hey, ' + name;
  return greetName;
}
var nameGreet = greet('Beavis');
console.log('namegreet:', nameGreet);
function getArea(width, height) {
  var areaCalc = width * height;
  return areaCalc;
}
var area = getArea(17, 42);
console.log('area:', area);
function getFirstName(person) {
  var nameFirst = person.firstName;
  return nameFirst;
}
var notLastName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('First name is:', notLastName);
function getLastElement(array) {
  var last = array[array.length - 1];
  return last;
}
var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('lastElement:', lastElement);
