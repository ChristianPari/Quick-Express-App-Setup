const mongoose = require('mongoose'),
    Test_Schema = mongoose.Schema({
        name: {
            type: Object,
            first: {
                type: String,
                required: true
            },
            last: {
                type: String,
                required: true
            }
        },
        age: {
            type: Number,
            required: true
        }
    }),
    Model = mongoose.model('test', Test_Schema);

module.exports = Model;