let env = process.env.NODE_ENV,
    config = require('./config')['development'],
    mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
module.exports = function () {
    mongoose.Promise = global.Promise;
    console.log("config.db:"+config.db);
    var db = mongoose.connect(config.db,{ useNewUrlParser: true });
    mongoose.connection.on('error', function (err) {
        console.log('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
    }).on('open', function () {
        console.log('Connection extablised with MongoDB')
    })
    return db;
};
