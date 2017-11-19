var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
fs = require("fs");

var app = express();
var PORT = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(express.static(__dirname + '/app/public'));

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);


// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/home.html"));
//   });

// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "app/public/survey.html"));
//   });
  
//   app.get("/api/friends", function(req, res) {
//     res.json(friendsList);
//   });


//   app.post("/api/friends",  function(req, res){
//       var currentFriend = req.body;
//         console.log(currentFriend);

//         var friendDifferences = [];

//         if (friendsList.length > 1){
//             friendsList.forEach(function(user){
//                 var totalDiff = 0;

//                 for(var i = 0; i < currentFriend.answers.length; i++){
//                     var otherAnswer = user.answers[i];
//                     var thisAnswer  = currentFriend.answers[i];
//                     var difference = +otherAnswer - +thisAnswer;
//                     totalDiff += Math.abs(difference);
//                 }
//                 friendDifferences.push(totalDiff);
//                 console.log(friendDifferences);
//             });

//             var lowestDifference = Math.min.apply(null, friendDifferences);

//             var bestMatches = [];

//             for (var i = 0; i < friendDifferences.length; i++){
//                 if(friendDifferences[i] === lowestDifference){
//                     bestMatches.push(friendList[i]);
//                 }
//             }

//             res.json(bestMatches);
//         } else {        
//             res.json(currentFriend);
//         }

//         friendsList.push(currentFriend);
        
//   });
                   // Grab the result from the AJAX post so that the best match's name and photo are displayed.
                 

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
