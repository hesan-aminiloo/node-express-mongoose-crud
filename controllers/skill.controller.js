
// Create a container for controllers
const skill_controller = {};

// Developer model
const Skill = require('../models/Skill.model');


skill_controller.listSkills = (req, res) => {
    Skill
        .find({})

        .then(skills => {
            if(skills)
                res.json(skills);
        })

        .catch(err => {
            console.log(err);
            res.json({
                status: false,
                msg: 'Something wrong with getting skill list'
            });
        });
};



skill_controller.getSkill = (req, res) => {

    const { id } = req.params;

    if (!id){

        res.status(400).send({
            status: false,
            msg: 'Please provide an ID to get skill info.'
        });

    } else {

        Skill 
            .findById(id)

            .populate('developers')

            .then(skill => {
                if(skill)
                    res.json(skill);
            })

            .catch(err => {
                console.log(err);
                res.json({
                    status: false,
                    msg: 'Something wrong with getting skill information'
                });
            });
    }

};



skill_controller.listDevelopers = (req, res) => {
    
};



skill_controller.createSkill = (req, res) => {
    const { name } = req.body;

    if (!name){

        res.status(400).send({
            status: false,
            msg: 'Please provide name and rate for this skill'
        });

    } else {

        let newSkill = new Skill(req.body);

        newSkill
            .save()

            .then(skill => {
                if (skill)
                    res.json(skill);
            })

            .catch(err => {
                console.log(err);
                res.json({
                    status: false,
                    msg: 'Error creating new skill'
                });
            });
    }

};



skill_controller.updateSkill = (req, res) => {

};



skill_controller.deleteSkill = (req, res) => {

};




module.exports = skill_controller;