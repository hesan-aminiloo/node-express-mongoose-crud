
const mongoose = require('mongoose');
const config = require('../config');

/*
 * Database connection uri
 *
 *  Mongo port : 27018
 *  Mongo database : mongo_crud
 *  Mongo ip : 127.0.0.1
 */

const uri = `mongodb://${config.mongo_ip}:${config.mongo_port}/${config.mongo_db}`;


mongoose
    .connect(uri, { useNewUrlParser: true })

    .then(() => {
        console.log('Successfuly connected to database!\n');
    })

    .catch(err => {
        console.log('Error connecting to database!\n');
        console.log(err);
    });


module.exports = mongoose;