var profile = require("./profile.js"); 

// var users = ["chalkers", "matthewsaul", "edennaftali", "davemcfarland"];



console.log(process.argv);

var users = process.argv.splice(2);

console.log(users);

users.forEach(profile.get);