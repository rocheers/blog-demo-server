require('dotenv').load();
const jwt = require('jsonwebtoken');

// make sure the user is logged - Authentication
exports.loginRequired = function(req, res, next) {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.SECRETE_KEY, function(err, decoded) {
        if (decoded) {
            return next();
        } else {
            return next({
                status: 401,
                message: 'Please log in first'
            });
        }
    });
};

// make sure we get the correct user - Authorization
exports.ensureCorrectUser = function(req, res, next) {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.SECRETE_KEY, function(err, decoded) {
        if (decoded && decoded.id === req.params.id) {
            return next();
        } else {
            return next({
                status: 401,
                message: 'Unauthorized'
            });
        }
    });
};
