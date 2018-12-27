const express = require('express');
const cors = require('cors');
const app = express();
const errorHandler = require('./handlers/error');

const PORT = 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
    console.log(`Server is listening on ${PORT}`);
});
