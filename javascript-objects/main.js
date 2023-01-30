var student = {
  firstName: 'Kevin',
  lastName: 'Lay',
  age: 28
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = true;
student.previouosOccupation = 'Liquor store cashier and security guard';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previouosOccupation);
console.log('value of student:', student);
var vehicle = {
  make: 'Toyota',
  model: 'Camery',
  year: 2008
};
vehicle['color'] = 'black';
vehicle['isConvertable'] = false;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertable']:", vehicle['isConvertable']);
console.log('value of vehice:', vehicle);
var pet = {
  name: 'Aiko',
  type: 'Shiba'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
