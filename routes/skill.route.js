
// Import dependencies
const express = require('express');
const router = express.Router();


// Skill Controller
const skill_controller = require('../controllers/skill.controller');


/*
 * Skill routes
 *
 * Prefix: /skill
 * 
 *  GET /list           ->  List of all skills
 *  GET /:id            ->  Get skill
 *  GET /:id/developers ->  Get users by this skill
 *  POST /create        ->  Create new skill
 *  PUT /:id            ->  Update skill
 *  DELETE /:id         ->  Delete skill
 * 
 */

 
router.get('/list',             skill_controller.listSkills);
router.get('/:id',              skill_controller.getSkill);
router.get('/:id/developers',   skill_controller.listDevelopers);
router.post('/create',          skill_controller.createSkill);
router.put('/:id',              skill_controller.updateSkill);
router.delete('/:id',           skill_controller.deleteSkill);


module.exports = router;