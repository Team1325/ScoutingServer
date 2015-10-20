var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var MatchSchema = new Schema({

  name: String,
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true, select: false}

});

module.exports = mongoose.model('Match', MatchSchema);
