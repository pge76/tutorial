const mongoose = require("mongoose");

mongoose.Promise =  global.Promise;
mongoose.connect("mongodb://localhost:27017/taskmanager")
    .then(() => { console.log(":: database is running"); })
    .catch(err => { console.log(`ERR: database startup error: ${err.message}` );
});

module.exports = mongoose;
