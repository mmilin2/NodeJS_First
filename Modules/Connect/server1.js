var connect = require('connect');
var http = require('http');

var app = connect();

//function doFirst(request, response, next){
//    console.log("This is a call to the first function...");
//    next();
//}
//
//function doSecond(request, response, next){
//    console.log("This is a call to the second function...");
//    next();
//}
//
//app.use(doFirst);
//app.use(doSecond);

function profile(request, response){
    console.log("User requested profile.");
}

function forum(request, response){
    console.log("User requested forum.");
}

app.use("/profile", profile);
app.use("/forum", forum);

http.createServer(app).listen(8888);
console.log("Server is up and running...");



