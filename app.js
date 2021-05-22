const express = require('express');
const bodyParser = require('body-parser');
let app = express();
let courseRouter = require('./routes/course');
let todoRouter = require('./routes/todo');
let usersRouter = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: "SUCCESS",
        errors: null,
        data: {
            result: "WELCOME"
        }
    });
});

app.use('/course', courseRouter);
app.use('/todo', todoRouter);
app.use('/users', usersRouter);

app.use("*", (req, res, next) => {
    res.status(404).json({
        status: "SUCCESS",
        errors: [
            {
                code: 404,
                message: "Api not found"
            }
        ],
        data: null
    });
});

module.exports = app;