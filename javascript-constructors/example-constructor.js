function ExampleConstructor() {}
console.log('ExampleConstructor.protoype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var constructedConstructor = new ExampleConstructor();
console.log('value of constructedConstructor:', constructedConstructor);

var checkInstanceOf = constructedConstructor instanceof ExampleConstructor;
console.log('value of checkInstanceOf:', checkInstanceOf);
