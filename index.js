require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const errorHandler = require('./handlers/error');
const authRouter = require('./routes/auth');
const messagesRouter = require('./routes/messages');

const PORT = 8081;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRouter);
app.use('/api/users/:id/messages', messagesRouter);

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
    console.log(`Server is listening on ${PORT}`);
});
