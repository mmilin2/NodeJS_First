//var fs = require('fs');
//
//fs.writeFileSync('example.txt', 'Fuck you webstorm!!!');
//console.log("File Created.");
//
//console.log(fs.readFileSync('example.txt').toString());

var path = require('path');

var webHome = "milin/desktop/node//hell.html";
var webClass = "milin/desktop/node/hello.html";

console.log(path.normalize(webHome));
console.log(path.normalize(webClass));

console.log(path.basename(webHome));
console.log(path.dirname(webClass));
console.log(path.extname(webClass));