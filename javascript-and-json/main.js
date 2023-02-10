var books = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];
console.log('books array:', books, 'type of:', typeof books);

var bookString = JSON.stringify(books);
console.log('JSON book array stringified:', bookString, 'type of:', typeof bookString);

var student = '{"id": 24, "name": "Kevin"}';
console.log('student:', student, 'type of student:', typeof student);

var studentObj = JSON.parse(student);
console.log('studentObj:', studentObj, 'type of studentObj:', typeof studentObj);
