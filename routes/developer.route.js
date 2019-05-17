
// Import dependencies
const express = require('express');
const router = express.Router();


// Developer Controller
const developer_controller = require('../controllers/developer.controller');


/*
 * Developer routes
 *
 * Prefix: /developer
 * 
 *  GET /list    ->  List of developers
 *  GET /:id     ->  Get developer
 *  POST /create ->  Create developer
 *  PUT /:id     ->  Update developer
 *  DELETE /:id  ->  Delete developer
 * 
 */

router.get('/list',     developer_controller.listDevelopers);
router.get('/:id',      developer_controller.getDeveloper);
router.post('/create',  developer_controller.createDeveloper);
router.put('/:id',      developer_controller.updateDeveloper);
router.delete('/:id',   developer_controller.deleteDeveloper);


module.exports = router;