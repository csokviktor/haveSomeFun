const bcrypt = require('bcrypt');

const saltRounds = 10;
var unsecurePW = 'password';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(unsecurePW, salt, function(err, hash) {
        console.log(hash)
    });
});