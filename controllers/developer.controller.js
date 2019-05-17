
// Create a container for controllers
const developer_controller = {};

// Developer model
const Developer = require('../models/Developer.model');


developer_controller.listDevelopers = (_req, res) => {

    Developer
        .find({})

        .populate('skills', 'name')

        .then(developers => {
            if (developers)
                res.json(developers);
        })

        .catch(err => {
            console.log(err);
            res.json({
                status: false,
                msg: 'Sorry! Something wrong with listing developers.'
            });
        });

};



developer_controller.getDeveloper = (req, res) => {

    let { id } = req.params;

    if (!id){

        res.status(400).send({
            status: false,
            msg: 'Please provide an ID to get developer info'
        });

    } else {

        Developer
        .findById(id)

        .populate('skills')

        .then(developer => {
            if(developer)
                res.json(developer);
        })

        .catch(err => {
            console.log(err);
            res.json({
                status: false,
                msg: 'Sorry! Something wrong with getting developer.'
            });
        });

    }

};



developer_controller.createDeveloper = (req, res) => {
    const { name, family } = req.body;

    if (!name || !family){

        res.status(400).send({
            status: false,
            msg: 'Please provide name and family'
        });

    } else {

        let developer = new Developer(req.body);

        developer
            .save()

            .then(dev => {
                if (dev)
                    res.json({
                        status: true,
                        msg: 'User created successfuly with id: ' + dev.id
                    });
            })

            .catch(err => {
                console.log(err);
                res.json({
                    status: false,
                    msg: 'Error creating new developer'
                });
            });

    }

};



developer_controller.updateDeveloper = (req, res) => {
    const { id } = req.params;

    if (!id || !req.body){

        res.status(400).send({
            status: false,
            msg: 'Please provide id and new data to update developer'
        });

    } else {
        Developer
            .findByIdAndUpdate(id, req.body, { upsert : true, new: true })

            .then(developer => {
                if (developer)
                    res.json(developer);
            })

            .catch(err => {
                console.log(err);
                res.json({
                    status: false,
                    msg: 'Error updating the developer'
                });
            });
    }
};



developer_controller.deleteDeveloper = (req, res) => {
    const { id } = req.params;

    if (!id){

        res.status(400).send({
            status: false,
            msg: 'Please provide id to delete developer'
        });

    } else {
        Developer
            .findByIdAndDelete(id)

            .then(developer => {
                if (developer)
                    res.json(developer);
            })

            .catch(err => {
                console.log(err);
                res.json({
                    status: false,
                    msg: 'Error deleting the developer'
                });
            });
    }
};





module.exports = developer_controller;