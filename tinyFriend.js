function tinyFriend(friends) {
    var smallName = friends[0]
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i]
        if (smallName.length>element.length) {
            smallName = element;
           }
    }
    console.log("The Tiny Friend Name is:", smallName);
}

var friends = ["Nurunnabi","Shakib","Prijon","Nehal", "Mohiuddin"];
tinyFriend(friends);