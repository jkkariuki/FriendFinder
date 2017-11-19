var path = require("path");

module.exports = function (app){
    var friendsList = [];
    
   
      app.get("/api/friends", function(req, res) {
        res.json(friendsList);
      });

      app.post("/api/friends",  function(req, res){
        var currentFriend = req.body;
          console.log(currentFriend);
  
          var friendDifferences = [];
  
          if (friendsList.length > 1){
              friendsList.forEach(function(user){
                  var totalDiff = 0;
  
                  for(var i = 0; i < currentFriend.answers.length; i++){
                      var otherAnswer = user.answers[i];
                      var thisAnswer  = currentFriend.answers[i];
                      var difference = +otherAnswer - +thisAnswer;
                      totalDiff += Math.abs(difference);
                  }
                  friendDifferences.push(totalDiff);
                  console.log(friendDifferences);
              });
  
              var lowestDifference = Math.min.apply(null, friendDifferences);
  
              var bestMatches = [];
  
              for (var i = 0; i < friendDifferences.length; i++){
                  if(friendDifferences[i] === lowestDifference){
                      bestMatches.push(friendList[i]);
                  }
              }
  
              res.json(bestMatches);
          } else {        
              res.json(currentFriend);
          }
  
          friendsList.push(currentFriend);
          
    });
};