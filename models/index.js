const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(
    process.env.MONGODB_URL || 'mongodb://localhost/warbler',
    {
        keepAlive: true,
        useNewUrlParser: true
    }
);

module.exports.User = require('./user');
module.exports.Message = require('./message');
