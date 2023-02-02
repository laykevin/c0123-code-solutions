/* exported getStudentNames */
function getStudentNames(students) {
  // var kev = [];
  // for (var i in students) {
  //   kev.push(students[i]);
  // }
  // return kev;
  var kev = [];
  for (var i = 0; i < students.length; i++) {
    kev.push(students[i].name);
  }
  return kev;
}
