
const db = require('../bootstrap/db');
const Schema = db.Schema;

const SkillSchema = new Schema({

    name: { type: String, required: true },
    developers: [{ type: Schema.Types.ObjectId, ref: 'Developer' }]

}, {
    collection: 'skills'
});

module.exports = db.model('Skill', SkillSchema);