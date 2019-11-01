
const friends = require('../data/friends.js');

module.exports = function (app) {
    
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    
    app.post('/api/friends', function (req, res) {
        
        var topMatch = {
            name: "",
            photo: "",
            friendDiff: 1000
        };

        
        const userData = req.body;
        const userScores = userData.scores;
        
        const userName = userData.name;
        const userPhoto = userData.photo;

        
        const total = 0;

        
        for (var i = 0; i < friends.length - 1; i++) {
            console.log(friends[i].name);
            total = 0;

            
            for (var j = 0; j < 10; j++) {
                
                total += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                
                if (total <= topMatch.friendDiff) {

                    
                    topMatch.name = friends[i].name;
                    topMatch.photo = friends[i].photo;
                    topMatch.friendDiff = total;
                }
            }
        }

        
        friends.push(userData);

        
        res.json(topMatch);
    });
};