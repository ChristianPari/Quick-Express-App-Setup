const express = require('express'),
    router = express.Router(),
    Test = require('../models/test');

router.get('/', async(req, res) => {

    try {

        const allTests = await Test.find({});

        return res.status(200).json({

            status: 200,
            message: "All Test Documents in the Database",
            all_tests: allTests

        });

    } catch (err) {

        return res.status(500).json({

            status: 500,
            message: err.message

        });

    }

});

router.post('/', async(req, res) => {

    try {

        const newTest = new Test(req.body);

        await Test.create(newTest);

        return res.status(201).json({

            status: 201,
            message: "Successful Creation of new Test",
            newDoc: newTest

        });

    } catch (err) {

        return res.status(500).json({

            status: 500,
            message: err.message,
            error: err

        });

    };


});

router.delete('/:id', async(req, res) => {

    try {

        const foundTest = await Test.findById(req.params.id);

        await Test.deleteMany({ _id: req.params.id });

        return res.status(200).json({

            status: 200,
            message: "Successful Deletion of Test",
            deleted_test: foundTest

        });

    } catch (err) {

        return res.status(500).json({

            status: 500,
            message: err.message,
            error: err

        });

    };

});

router.patch('/:id', async(req, res) => {

    try {

        const patchData = req.body,
            foundTest = await Test.findById(req.params.id);

        await Test.findOneAndUpdate({ _id: req.params.id }, patchData);

        return res.status(200).json({

            status: 200,
            message: "Successful Update of Test",
            new_test: await Test.findById(req.params.id),
            old_test: foundTest

        });

    } catch (err) {

        return res.status(500).json({

            status: 500,
            message: err.message,
            error: err

        });

    };

});

module.exports = router;