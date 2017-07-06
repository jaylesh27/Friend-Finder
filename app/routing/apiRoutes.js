
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
	for (var i = 0; i < possibleFriends.length; i++) {
		return res.json(possibleFriends[i]);
	}
});


//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic
app.post("/api/friends", function(req, res) {
  var newFriend = new FriendData(res.name, res.photo, res.scores);

  console.log(newFriend);

  possibleFriends.push(newFriend);

});