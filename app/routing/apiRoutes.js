app.get("/api/friends", function(req, res) {
	for (var i = 0; i < possibleFriends.length; i++) {
		return res.json(possibleFriends[i]);
	}
});

app.post("/api/friends", function(req, res) {
  var newFriend = new FriendData(res.name, res.photo, res.scores);

  console.log(newFriend);

  possibleFriends.push(newFriend);

});