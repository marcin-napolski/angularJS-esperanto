var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const execSync = require('child_process').execSync;

var scoreSchema = new Schema({ 
    name: String,
    score: Number
});

var Score = mongoose.model('Score', scoreSchema);

module.exports = Score;