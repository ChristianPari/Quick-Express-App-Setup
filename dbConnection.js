const mongoose = require('mongoose'),
    mongoURI = process.env.MONGO_URI,
    depObj = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    };

function dbConnect() {

    mongoose.connect(mongoURI, depObj, err => {

        if (err) {
            console.log(`\nSomething went wrong, error:\n${err}`);
        } else {
            console.log("\nConnection Established to Database");
        }

    });

    mongoose.connection.on('error', err => {

        console.log(`\nError occured when attempting to connect to database, error:\n${err}`);

    });

    mongoose.connection.on('connected', () => {

        console.log(`\nConnecting to Mongo Database at URI:\n${mongoURI}`);

    });

};

module.exports = dbConnect;