require('dotenv').config();
const express = require('express'),
    app = express(),
    morgan = require('morgan'),
    port = process.env.PORT,
    dbConnect = require('./dbConnection'),
    homeRouter = require('./routes/home');

app.use(morgan('dev'));
app.use(express.json());

dbConnect();

app.use('/', homeRouter);

app.listen(port, () => { console.log(`\nListening on port: ${port}`); });