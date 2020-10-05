// This file will handle connection logic to the MongoDB database

//const promiseRetry = require('promise-retry');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb+srv://root:test@cluster0.oz5au.gcp.mongodb.net/testdb?retryWrites=true', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});


// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};