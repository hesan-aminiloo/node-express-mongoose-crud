
const db = require('../bootstrap/db');
const Schema = db.Schema;

const DeveloperSchema = new Schema({

    name    : { type: String, required: true },
    
    family  : { type: String, required: true },

    skills  : [{ type: Schema.Types.ObjectId, ref: 'Skill' }]

}, {
    collection: 'developers'
});


module.exports = db.model('Developer', DeveloperSchema);