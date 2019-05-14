
const mongoose = require('mongoose');


/*
 * Database connection uri
 *
 *  Mongo port : 27018
 *  Mongo database : mongo_crud
 *  Mongo ip : 127.0.0.1
 */

const uri = 'mongodb://127.0.0.1:27018/mongo_crud';


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