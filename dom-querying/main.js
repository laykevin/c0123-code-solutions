console.log('hello, world');
// var kev = document.querySelector('div');
// var lay = kev.firstChild;
// console.log(lay);
// console.dir(lay);
var kev = document.querySelector('h1');
console.log('$heading', kev);
console.dir(kev);
var lay = document.querySelector('#explanation');
console.log('$explanation', lay);
console.dir(lay);
var me = document.querySelector('.hint');
console.log('$hint', me);
console.dir(me);
var pAll = document.querySelectorAll('p');
console.log('$paragraphs', pAll);
var elAll = document.querySelectorAll('.example-link');
console.log('$links', elAll);